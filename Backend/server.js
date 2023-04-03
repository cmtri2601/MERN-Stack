const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || "8080";
//require("dotenv").config();

app.use("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
