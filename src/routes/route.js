const express =require('express');
const router =express.Router();
const bookModel =require("../models/bookModel")
const bookController = require("../controllers/bookController")

router.get("/Books", function(req,res){
    res.send("My first ever api!")
})

router.post("/createNewBook",bookController.createNewBook)

router.get("/getAllBook",bookController.getAllBook)

module.exports = router;


