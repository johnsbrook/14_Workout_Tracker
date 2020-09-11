// Requiring Mongoose and declaring Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Building model for database
const workoutSchema = new Schema({
    day: {type: Date, default: Date.now}, 
    exercises: [{
        type: {type: String, required: true},
        name: {type: String, required: true},
        duration: {type: Number, required: true},
        weight: {type: Number, required: true},
        reps: {type: Number, required: true}, 
        sets: {types: Number, required: true}
    }]
})

// Declare const to be exported
const Workout = mongoose.model("workout", workoutSchema);
// Exporting Workout module
module.exports = Workout;