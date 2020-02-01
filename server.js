const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./routes');
// const db = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();
const databaseName = 'workout_db';

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use('/', routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => console.log(`successfully connected to database: ${databaseName}`))

// routes
// app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});