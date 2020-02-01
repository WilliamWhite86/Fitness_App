// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const router = require("express").Router();

// Requiring our Workout and Index models

const db = require("../models");

// Routes
// =============================================================


// getLastWorkout() GET /api/workouts
router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



// addExercise(data) PUT /api/workouts




// createWorkout() POST /api/workouts




// getWorkoutsInRange() /api/workouts/range
module.exports = router;