const Workout = require("../models/workout.js");

module.exports = app => {
  app.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(workouts => {
        res.json(workouts);
        console.log(workouts);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
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

  app.put('/api/workouts/:id', (req, res) => {
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

  app.get('/api/workouts/range', (req, res) => {
    Workout.find({})
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err)
        console.log(err);
      });
  });

};
