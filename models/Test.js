import mongoose, { Schema } from "mongoose";

const TestSchema = new Schema({
  name: { type: String, unique: true },
  description: { type: String },
});

let Test;

try {
  Test = mongoose.model("Test");
} catch {
  Test = mongoose.model("Test", TestSchema);
}
export default Test;
