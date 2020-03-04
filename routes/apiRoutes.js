const Workout = require("../models/workout.js");
const router = require("express").Router();


  router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(workouts => {
        console.log(workouts);
        res.json(workouts);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(workouts => {
        console.log(workouts);
        res.json(workouts);
        
      })
      .catch(err => {
        console.log(err);
        res.json(err)
      });
  });

  router.put('/api/workouts/:id', (req, res) => {
    const getId = req.params.id;
    const getBody = req.body;
    Workout.findByIdAndUpdate(getId, { $push: { exercise: getBody } })
      .then(workouts => {
        res.json(workouts);
        console.log(workouts);
      })
      .catch(err => {
        console.log(err);
        res.json(err)
      });
  });

  router.get('/api/workout/range', (req, res) => {
    Workout.find({})
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err)
        console.log(err);
      });
  });

  module.exports = router;
