const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI || "mongodb://workout:tracker1@ds329058.mlab.com:29058/heroku_5vhz7gdn", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// mongoose.connect(MONGODB_URI || "mongodb://localhost:3000", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// routes
require("./routes/html.js")(app);
require("./routes/apiRoutes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});