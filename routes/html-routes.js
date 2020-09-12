// requires express method .Router() as "router" and path
const router = require("express").Router();
const path = require("path");

// GET /exercise and use ../public/exercise.html file path
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// GET /stats and use ../public/stats.html file path
router.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});