const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(data => {
      res.json(data);
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(data => {
      res.json(data);
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put(
  "/api/workouts/:id",
  ({ body, params },
  (req, res) => {
    const getId = req.params.id;
    const getBody = req.body;
    Workout.findByIdAndUpdate({ id: getId }, { $push: { exercise: getBody } })
      .then(data => {
        res.json(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  })
);

router.get("/api/workout/range", (req, res) => {
    Workout.find()
        .then(data => {
            res.json(data);
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
})
