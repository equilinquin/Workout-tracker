const Workout = require("../models/workout");

module.exports = app => {
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(data => {
        res.json(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(data => {
        res.json(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params}, res) => {
    const getId = params.id;
    console.log(getId)
    const getBody = body;
    Workout.findByIdAndUpdate(getId, { $push: { exercise: getBody } })
      .then(data => {
        res.json(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.get("/api/workout/range", (req, res) => {
    Workout.find({})
      .then(data => {
        res.json(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
