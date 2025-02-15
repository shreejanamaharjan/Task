/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { Schema } from "mongoose";
import slugify from "slugify";
import { IUser } from "../interfaces/user";

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    lastLogin: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("validate", function (next) {
  if (this.isNew || this.isModified("name")) {
    this.slug = slugify(this.email, { lower: true, strict: true });
  }
  next();
});
userSchema.post("findOneAndUpdate", async (document) => {
  if (document.name) {
    document.slug = slugify(document.username, { lower: true, strict: true });
  }
});
userSchema.post("findOneAndDelete", async (document) => {
  const brandId = document._id;
  try {
    await userModel.deleteMany({ brand: brandId });
  } catch (error: any) {
    console.error(error);
  }
});
const userModel = mongoose.model("User", userSchema);
export default userModel;
