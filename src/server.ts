import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import http from 'http';
import mongoose from 'mongoose';
import socketIo from 'socket.io';
import { cache } from './cache';
import { graphqlSchema } from './graphql';
import { getRouter, postRouter, updateRouter } from './routes';
import { callMongoDB } from './routes/get';

dotenv.config();

const PORT: number | string = process.env.PORT || 5000; // ?

const app: express.Application = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

const allowedOrigins: string[] = [
  'http://localhost:3000',
  'http://localhost:5000',
  'https://izsk.netlify.app',
  'http://localhost:8080',
  'https://izsk-vue.netlify.app',
  'https://izsk-next.vercel.app',
];
app.use(
  cors({
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean | undefined) => void) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg: string = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  }),
);

app.use('/', getRouter, postRouter, updateRouter);

app.use(cache);

mongoose.connect(
  process.env.MONGO_DB_TOKEN as string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },

  (err) => {
    console.log('connected to db'); // ?
    console.log('this is mongo error', err);
  },
);

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true,
  }),
);

const server: http.Server = http.createServer(app);
//@ts-ignore
const io: socketIo.Server = socketIo(server);

io.on('connect', async (socket: socketIo.Socket) => {
  socket.emit('getInformations', { informations: await callMongoDB() });
});

server.listen(PORT, function () {
  console.log(`App is listening on port ${PORT}!`);
});
