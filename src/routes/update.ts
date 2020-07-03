import dotenv from 'dotenv';
import express, { Router } from 'express';
import { InformationMongooseModelPost } from '../models';

dotenv.config();

const updateRouter: Router = express.Router();

updateRouter.put('/informations/:postId', async (req, res) => {
  try {
    const updateInformations = await InformationMongooseModelPost.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          avatar: req.body.avatar,
          educationInformations: req.body.educationInformations,
          experienceInformations: req.body.experienceInformations,
          photos: req.body.photos,
          skillsInformation: req.body.skillsInformation,
          myOffers: req.body.myOffers,
        },
      },
    );
    res.json(updateInformations);
  } catch (err) {
    res.json(err);
  }
});

export { updateRouter };
