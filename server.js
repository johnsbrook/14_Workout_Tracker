// Requiring Express and Mongoose
const express = require("express");
const mongoose = require("mongoose");
// Declaring port 
const PORT = process.env.PORT || 3000;
// Declaring app to use express()
const app = express();

// URL encoding and json()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Asking server to use public folder
app.use(express.static("public"));

// Asking server to use workout database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Requiring api.js
app.use(require("./public/api.js"));

// Port listening 
app.listen(PORT, () => {
    console.log(`App running on port, click here to access http://localhost.com/${PORT}`);
})