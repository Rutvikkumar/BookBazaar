import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import bookRoute from "./routes/book_rout.js";
import userRoute from "./routes/user_rout.js";
dotenv.config();

const port = process.env.PORT || 3000;
const uri = process.env.MONGODBURL;
const app = express();

app.use(cors());
try {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB Connected");
} catch (err) {
  console.error(err.message);
  // Exit process with failure
  process.exit(1);
}
app.use(express.json());
app.use("/book", bookRoute);
app.use("/user", userRoute);

//deployment code

if(process.env.NODE_ENV ==="production"){
  const dirPath = path.resolve();
  app.use(express.static("Frontend/dist"));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirPath,"Frontend","dist","index.html"));
  })
}

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
