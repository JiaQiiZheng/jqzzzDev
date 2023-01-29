import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authenticateToken from "./middleWare/authenticateToken.js";

const app = express();

// parse application/json
app.use(bodyParser.json());

// import homeRouter from "./routes/home.js";
// app.use("/", homeRouter);

// import userRouter from "./routes/users.js";
// app.use("/", userRouter);

// const posts = [
//   {
//     username: "Jiaqi",
//     title: "Post 1",
//   },
//   {
//     username: "Jim",
//     title: "Post 2",
//   },
// ];
// app.get("/posts", authenticateToken, (req, res) => {
//   res.json(posts.filter((post) => post.username === req.body.name));
// });

import postRoutes from "./routes/Post/posts.js";
app.use("/post", postRoutes);

import mongoose, { setDriver } from "mongoose";
mongoose.set("strictQuery", false);
const CONNECTION_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 8080;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Connected to Mongoose, Server listening on port ${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

export default app;
