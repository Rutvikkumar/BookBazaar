import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/book_rout.js";
dotenv.config();

const port = process.env.PORT || 3000;
const uri = process.env.MONGODBURL;
const app = express();

try {
  await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });
  console.log('MongoDB Connected');
} catch (err) {
  console.error(err.message);
  // Exit process with failure
  process.exit(1);
}
app.use(express.json());
app.use("/book",bookRoute);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
