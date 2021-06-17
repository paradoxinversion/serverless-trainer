// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Test from "../../models/Test";
import { connectToDatabase } from "../../utils/mongodb";
export default async function handler(req, res) {
  try {
    await connectToDatabase();
    let t = await Test.findOne({}).lean();
    if (!t) {
      const newT = new Test({
        name: "T1",
        description: "First test",
      });
      await newT.save();
      t = newT;
    }
    console.log(t);
    res.status(200).json({ t });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
