require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || "8000";
const morgan = require("morgan");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");

connectDB();
app.use(cors(corsOptions));
// app.use(cookieParser);
app.use(express.json());
app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "public"))); //Explicit way
//app.use(express.static("public")); Also work (implicit way)

app.use("/", require("./routes/root"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("html")) {
    res.josn({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
