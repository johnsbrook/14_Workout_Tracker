// Requiring Router() from express and declaring db variable to require '../models' from local
const router = require("express").Router();
const db = require("../models");
// const mongo = require("mongojs");

router.post("/api/workouts", ({ body }, res) => {

    db.Workout.create({})
        .then((cb) => {
            res.json(cb)
        })
        .catch(err => {
            res.status(400).json(err)
        });

})

router.put("/api/workouts/:id", ({ body, params }, res) => {
    
    db.Workout.findByIdAndUpdate(
        
        params.id,
        { $push: { exercises: body } }
        // { new: true, runValidators: true },
    )
        .then( (cb) => {
            res.json(cb)
        })
        // .catch( (err) => {
        //     res.json(err)
        // });
        .catch(err => {
            res.status(400).json(err)
        });
});

router.get("/api/workouts", (req, res) => {

    db.Workout.find({})
        .then( (cb) => {
            res.json(cb)
        })
        // .catch( (err) => {
        //     res.json(err)
        // });
        .catch(err => {
            res.status(400).json(err)
        });
});


router.get("/api/workouts/range", (req, res) => {

    db.Workout.find({})
        .limit(10)
        .then( (cb) => {
            res.json(cb)
        })
        // .catch( (err) => {
        //     res.json(err)
        // });
        .catch(err => {
            res.status(400).json(err)
        });
});


router.delete("/api/workouts", ({ body, params }, res) => {

    db.Workout.find(params.id)
        .then( (cb) => {
            res.json(cb)
        })
        .catch(err => {
            res.status(400).json(err)
        });
});

module.exports = router;
