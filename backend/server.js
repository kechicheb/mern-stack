const express = require("express");
require("dotenv").config();
// express app
const app = express();

// routes
app.get("/", (req, res) => {
  res.json({ message: "welcome to the app" });
});
// listen for requests
app.listen(process.env.PORT, () => console.log(`listeneing on for port 4000`));
