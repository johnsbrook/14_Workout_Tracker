// Setting up Mongoose requirement for schema;
const mongoose = require("mongoose");
                console.log("This is mongoose", mongoose);
// Setting up Schema variable using mongoose.Schema;
const Schema = mongoose.Schema;
                console.log("This is Schema in mongoose", Schema);

// Setting up Schema to be used as a requirement;
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    }, 
    exercises: [
        {
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
                
            },
            weight: {

            },
            reps: {

            },
            sets: {

            }
        }
    ]
})

// Setting up Schema as a model;
// const Workout = mongoose.model("Workout", workoutSchema);

// Exporting model;
// module.exports = Workout;