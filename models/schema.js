// Setting up Mongoose requirement for schema;
const mongoose = require("mongoose");
                // console.log("This is mongoose", mongoose);
// Setting up Schema variable using mongoose.Schema;
const Schema = mongoose.Schema;
                // console.log("This is Schema in mongoose", Schema);

// Setting up Schema to be used as a requirement;
const workoutSchema = new Schema({

    // Setting day: with type and default value
    day: {
        type: Date,
        default: Date.now
    }, 

    // Setting exercises: with an array of objects;
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Please, enter the type of exercise."
        },
        name: {
            type: String,
            trim: true,
            required: "Please, enter the exercise's name."
        },
        duration: {
            type: Number,
            unique: false,
            required: true
        },
        weight: {
            type: Number,
            unique: false,
            required: true
        },
        reps: {
            type: Number,
            unique: false,
            required: true 
        },
        sets: {
            type: Number,
            unique: false,
            required: true
        }
    }]
})

// Setting up Schema as a model;
const Workout = mongoose.model("Workout", workoutSchema);
console.log("This is workoutSchema '<br>'", workoutSchema)
// Exporting model;
module.exports = Workout;