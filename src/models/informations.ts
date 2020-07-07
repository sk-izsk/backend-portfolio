import mongoose from 'mongoose';
import { Informations } from '../Informations';

const InformationPostSchema: mongoose.Schema<Informations> = new mongoose.Schema({
  avatar: {
    avatarOne: String,
    avatarTwo: String,
  },
  educationInformations: [
    {
      nameOfOrganization: String,
      startYear: String,
      endYear: String,
      details: String,
    },
  ],
  experienceInformations: [
    {
      nameOfOrganization: String,
      startYear: String,
      endYear: String,
      details: String,
    },
  ],
  photos: [{ url: String }],
  skillsInformation: [
    {
      name: String,
      progress: Number,
      backgroundColor: String,
      technology: String,
    },
  ],
  myOffers: {
    frontEnd: {
      name: String,
      offerings: [String],
    },
    backEnd: {
      name: String,
      offerings: [String],
    },
  },
});

const InformationMongooseModelPost: mongoose.Model<mongoose.Document, {}> = mongoose.model(
  'informations',
  InformationPostSchema,
);

export { InformationMongooseModelPost };
