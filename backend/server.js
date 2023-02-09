require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const cors = require("cors");
const bodyParser = require("body-parser");
// express app
const app = express();



// middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);


// connect to db
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    // listen to port
    app.listen(process.env.PORT, () =>
      console.log(`connected to db AND listening on port`, process.env.PORT)
    );
  })
  .catch((err) => console.log(err));