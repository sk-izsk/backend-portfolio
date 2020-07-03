import express, { Response, Router } from 'express';
import { InformationMongooseModelPost } from '../models';

const getRouter: Router = express.Router();

getRouter.get('/informations', async (_, res: Response) => {
  try {
    const posts = await InformationMongooseModelPost.find();
    res.json(posts);
  } catch (err) {
    res.json(err);
  }
});

export { getRouter };
