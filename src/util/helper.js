const printDate = function(){
    const currentdate = new Date()
    console.log("The current date is:", currentdate)
}

const printMonth = function(){
    const currentdate = new Date()
    console.log( "The current month is:" , currentdate.getMonth() +1 )
}

const getBatchInfo = function(){
    console.log("My batch is Radon.The week is 3rd and 3rd day,the topic for today is Nodejs module system.")
}

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo