const express = require("express");
const router = express.Router();

// ? we can write the code like this (below):
// router.get("/", (req, res)=>{
//     res.send("Hi");
// });

router.route("/").get((req, res)=>{
    res.send("Hi");
});

router.route("/register").get((req, res)=>{
    res.status(200).send("Registaration Page");
});

module.exports = router;