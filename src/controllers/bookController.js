const { count } = require("console")
const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")


const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let author_id=data.author_id
    if(!author_id) return res.send({msg: "Author id is mandatory"})
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const getBook = async function(req,res){
    let authorData = await authorModel.find({authorName:"Chetan Bhagat"}).select("author_id")
    let bookData = await bookModel.find({author_id:authorData[1].author_id}) 
    res.send({msg: bookData})
}


 const findAndUpdate = async function(req,res){
     let books = await bookModel.findOneAndUpdate(  {bookName: "2 states" } , {$set: {price : 100} }, { new: true});
     let authorData= await authorModel.find({author_id:books.author_id}).select("authorName")
     let price = books.price
     res.send({msg: authorData,price})
 }


const booksCost = async function(req,res){
    const bookData = await bookModel.find({price: {$gte: 50, $lte: 100}}).select({author_id:1, _id:0 })
    const id = bookData.map(inp => inp.author_id)

    let temp = []

    for(let i=0;i<id.length;i++){
        let x = id[i]
        const author = await authorModel.find({ author_id:x}).select({authorName:1, _id:0})
        temp.push(author) 
    }
    const author_name = temp.flat()
    res.send({msg: author_name})
}

 const getBooksName = async function(req,res){
     
    let data = req.params.author_id
    let books = await bookModel.find({author_id:data})
    let output = books.map(inp => inp.bookName)
    res.send({msg: output})
}

  const listAuthor = async function(req,res){
          let ratingData = await bookModel.find({ rating: {$gt: 4} }).select({ author_id: 1, rating:1})
          let output = ratingData.map(inp => inp.author_id)
         console.log(output)
          let ageData = await authorModel.find({ age:{$gt: 50}}).select({author_id:1, age:1, })
         let op = ageData.map(inp => inp.author_id)
          console.log(op)

          const author_name = temp.flat()
          res.send({msg : author_name})
      }
    
    
    module.exports.createBook = createBook
    module.exports.createAuthor = createAuthor
    module.exports.getBook = getBook
    module.exports.findAndUpdate = findAndUpdate
    module.exports.booksCost = booksCost
    module.exports.getBooksName = getBooksName
    module.exports.listAuthor = listAuthor