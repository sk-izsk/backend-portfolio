import cors from 'cors';
import express, { Request, Response } from 'express';
import { Shape } from 'yup';
import { sendMail } from './mail';
import { formSchema, InputValues } from './validation';

const PORT: number | string = process.env.PORT || 5000;

const app: express.Application = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

const allowedOrigins: string[] = ['http://localhost:3000', 'https://izsk.netlify.app'];
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

app.post('/email', async (req: Request<any, any, InputValues, any>, res: Response<any>) => {
  const validatedData: Shape<
    InputValues | undefined,
    {
      name: string;
      email: string;
      subject: string;
      message: string;
    }
  > = await formSchema.validate(req.body);
  if (validatedData !== undefined) {
    const { email, message, name, subject } = validatedData;
    const modifiedMessage: string = `${name}: ${message}`;
    sendMail(email, subject, modifiedMessage);
    res.json({ message: 'message received' });
  }
});

app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT}!`);
});
