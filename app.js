const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//middle wears
app.use(cors());
app.use(bodyParser.json());

// import routes

const postsRoutes = require("./routes/posts");

app.use("/posts", postsRoutes);

// routes
app.get("/", (req, res) => {
  res.send("we out here");
});

app.get("/test", (req, res) => {
  res.send("a ver si anda esto");
});

// connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
