import { Client as IClient } from '@/lib/interface';
import mongoose, { Model } from 'mongoose';

const clientSchema = new mongoose.Schema<IClient>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Email is invalid'
      ]
    },
    phone: String,
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: [true, 'Name is required']
    },
    role: {
      type: String,
      default: 'client'
    }
  },
  {
    timestamps: true
  }
);

const Client: Model<IClient> =
  mongoose.models.Client || mongoose.model<IClient>('Client', clientSchema);
export default Client;
