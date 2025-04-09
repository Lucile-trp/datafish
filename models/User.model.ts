import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  id: string;
  email: string;
  password: string;
  name: string;
  roles: string[];
}

const UserSchema = new Schema<IUser>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: [{type: String, required:true, default:"USER"}]
});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
