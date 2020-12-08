import express, { Request, Response, Router } from 'express';
import { sendMail } from '../mail';
import { EmailMongooseModelPost, InformationMongooseModelPost } from '../models';
import { formSchema, InputValues } from '../validation';

const postRouter: Router = express.Router();

postRouter.post('/email', async (req: Request<any, any, InputValues, any>, res: Response<any>) => {
  try {
    const validatedData = await formSchema.validate(req.body);
    if (validatedData !== undefined) {
      const { email, message, name, subject, environment } = validatedData;
      const modifiedMessage: string = `${name}: ${message}`;
      sendMail(email, subject, modifiedMessage);
      const emailSaveToMongo = new EmailMongooseModelPost({
        name,
        email,
        subject,
        message,
        environment,
      });
      emailSaveToMongo
        .save()
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
      res.json({ message: 'message received' });
    }
  } catch (err) {
    res.json(err);
  }
});

postRouter.post('/informations', async (req, res) => {
  const informationsToMongo = new InformationMongooseModelPost({
    avatar: req.body.avatar,
    educationInformations: req.body.educationInformations,
    experienceInformations: req.body.experienceInformations,
    photos: req.body.photos,
    skillsInformation: req.body.skillsInformation,
    myOffers: req.body.myOffers,
  });

  try {
    const savedInformationas = await informationsToMongo.save();
    res.json(savedInformationas);
  } catch (err) {
    res.json(err);
  }
});

export { postRouter };
