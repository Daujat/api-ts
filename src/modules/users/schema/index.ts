import mongoose, { Schema } from "mongoose";

export interface IUser extends mongoose.Document {
  username: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
});

export default mongoose.model<IUser>("User", UserSchema);
