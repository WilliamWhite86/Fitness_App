// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Workout and Index models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the workouts
//   app.get("/workouts/", function(req, res) {
//     db.Workout.findAll({})
//       .then(function(dbWorkout) {
//         console.log(res);
//         res.json(dbWorkout);
//       });
//   })};


// getLastWorkout() GET /api/workouts
app.get("/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  };  



// addExercise(data) PUT /api/workouts




// createWorkout() POST /api/workouts




// getWorkoutsInRange() /api/workouts/range
