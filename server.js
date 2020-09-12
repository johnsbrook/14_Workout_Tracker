// Requiring express, morgan, and mongoose
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const { urlencoded } = require("express");

// Creating PORT variable for process.env.PORT
const PORT = process.env.PORT || 3000;

// Creating app for express();
const app = express();

// Logger method with express;
app.use(logger("dev"));

// Have express use urlencoded() and json()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Have express convert "public" folder into default folder for browser navigation using static
app.use(express.static("public"));

// Creating mongoose connection to "workout" database
mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// Creating an event listener to allow app to run using const PORT
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}; http://localhost:${PORT}`);
})