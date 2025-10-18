import mongoose from "mongoose";
const { Schema } = mongoose;

const teachersForOlevelsSchema = new Schema({
  name: String,
  image: String,
  description: String,
  aGrade: Number,
  a: Number,
  socialLinks: {
    facebookLink: String,
    xLink: String,
    linkedInLink: String,
  },
  subjects: [String],
});

const TeachersForOlevels = mongoose.model(
  "TeachersForOlevels",
  teachersForOlevelsSchema,
  "teachersForOlevels"
);

export default TeachersForOlevels;
