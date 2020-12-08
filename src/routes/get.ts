import express, { Response, Router } from 'express';
import { Document } from 'mongoose';
import { InformationMongooseModelPost } from '../models';

const callMongoDB: (
  res?: express.Response<any> | undefined,
) => Promise<void | express.Response<any> | Document[]> = async (res?: Response) => {
  try {
    const posts = await InformationMongooseModelPost.find();

    return res ? res.json(posts) : posts;
  } catch (err) {
    return res ? res.json(err) : console.warn(err);
  }
};

const getRouter: Router = express.Router();

getRouter.get('/informations', async (_, res: Response) => {
  callMongoDB(res);
});

export { getRouter, callMongoDB };
