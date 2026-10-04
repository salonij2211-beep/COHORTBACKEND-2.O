const mongoose = require("mongoose");
function connectToDb (){
    mongoose.connect(process.env.MONGO_URI)
    .then(function(){
        console.log("connectdb")
    })
}
module.exports=connectToDb