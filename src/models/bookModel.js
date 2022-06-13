const mongoose=require('mongoose');

const bookSchema = new mongoose.Schema({

    bookName:{
        type:String,
        required: true
},
authorName:String,
category :String,
totalPages :Number,
stockAvailable : Boolean,
prices: {
    indianPrice: String,
    europePrice: String,
},
year:{
    type:Number,
}},{timestamps:true}
)

module.exports = mongoose.model('Book', bookSchema) 





// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });


// module.exports = mongoose.model('Book', bookSchema) //users

// //Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
