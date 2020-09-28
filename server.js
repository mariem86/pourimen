const express = require("express");

const connectDB = require("./config/connectDB");

const app = express();

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const profileRouter = require("./routes/profile");
const annonceRouter = require("./routes/annonce");

//middleWares
app.use(express.json());

//start the server
connectDB();

//routes
app.use("/api/auth", authRouter);
app.use("/api/auth", userRouter);
app.use("/api/auth", profileRouter);
app.use("/api/auth", annonceRouter);
//lunch the Server
const port = process.env.PORT || 5001;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`The Serveris Running on port ${port}....`);
});
