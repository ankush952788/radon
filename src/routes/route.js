const express = require('express');
const logger = require('../logger/logger')
const helper = require('../util/helper')
const formatter = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.welcome()
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo()
    formatter.trim()
   
    res.send('My first ever api!')
});
module.exports = router;




router.get('/hello',function(req,res){
   
    let year = ['JAN','FEB','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPT','OCT','NOV','DEC']
    let name = require("lodash");
    console.log(name.chunk(year,3))
   


    let array =[1,3,5,7,9,11,13,15,17,19.]
    const _ = require('lodash');
     let newArray = _.tail(array);
     console.log(newArray);


    let array1=[1,2,3,4,5]
    let array2=[1,3,4,6,7]
    let array3=[1,3,6,7,9]
    let array4=[3,4,6,7,9]
    let array5=[1,3,6,7,9]
    console.log(_.union(array1,array2,array3,array4,array5))
    

    let movie= [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','fans Labyrinth']]
    console.log(_.fromPairs(movie))

    res.send('loadash installed')
})