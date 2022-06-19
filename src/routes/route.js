const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")



//Author API
router.post("/createAuthor", authorController.createAuthor  )
//Publisher API
router.post("/createPublisher", publisherController.createPublisher)
//Book API
router.post("/createBook", bookController.createBook  )
router.put("/updateIsHardCover", bookController.updateIsHardCover)
router.put("/authorRating", bookController.authorRating)
router.get("/getBooksWithAuthor_PublisherDetails", bookController. getBooksWithAuthor_PublisherDetails)


module.exports = router;