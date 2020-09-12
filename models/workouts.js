// Requiring Mongoose and declaring Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Building model for database
const workoutSchema = new Schema({

    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String, 
                trim: true,
                required: true             
            },
            name: { 
                type: String,
                trim: true,
                required: true               
            },
            duration: { 
                type: Number,
                trim: true,
                required: true
            },
            weight: { 
                type: Number,
            },
            reps: { 
                type: Number, 
            },
            sets: { 
                type: Number,  
            },
            distance: {
                type: Number
            }
        }]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// Declare const to be exported
const Workout = mongoose.model("Workout", workoutSchema);
// Exporting Workout module
module.exports = { Workout };