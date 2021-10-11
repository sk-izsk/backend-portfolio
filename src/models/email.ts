import mongoose from 'mongoose';
import { InputValues } from '../validation';

const EmailPostSchema: mongoose.Schema<InputValues> = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  environment: String,
});

const EmailMongooseModelPost: mongoose.Model<InputValues, {}, {}, {}> = mongoose.model('emails', EmailPostSchema);

export { EmailMongooseModelPost };
