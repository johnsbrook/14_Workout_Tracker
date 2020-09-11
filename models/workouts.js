// Requiring Mongoose and declaring Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Building model for database
const workoutSchema = new Schema({

    day: {
        type: Date,
    },
    exercises: [
        {
            type: {
                type: String,              
            },
            name: { 
                type: String,                
            },
            duration: { 
                type: Number, 
            },
            weight: { 
                type: Number, 
            },
            reps: { 
                type: Number, 
            },
            sets: { 
                type: Number,  
            }
        }]
});

// Declare const to be exported
const Workout = mongoose.model("Workout", workoutSchema);
// Exporting Workout module
module.exports = Workout;