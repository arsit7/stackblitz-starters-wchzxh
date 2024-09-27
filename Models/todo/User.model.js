import { Timestamp } from 'bson';
import monhoose from 'mongoose';

const userSchema = new mongoose.schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
  },
  { Timestamp: true }
);

const User = mongoose.model('User', userSchema);
