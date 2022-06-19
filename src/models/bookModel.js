const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "AnkushAuthor",
        required: true
    },
    price: Number,
    ratings: Number,
    isHardCover:{
        type: Boolean,
        default: false
    },
    publisher:{
        type: ObjectId,
        ref: "AnkushPublisher",
        required:true
    }


}, { timestamps: true });


module.exports = mongoose.model('AnkushBook', bookSchema)