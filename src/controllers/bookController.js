const bookModel = require("../models/bookModel")

const createNewBook = async function (req,res){
    let data=req.body
    let savedData= await bookModel.create(data)
    res.send({msg:savedData})
}
const getAllBook = async function (req,res){
    let allBooks = await bookModel.find()
    res.send({msg:allBooks})
}

module.exports.createNewBook=createNewBook
module.exports.getAllBook=getAllBook
