const app = require("./src/app")
// const mongoose =require("mongoose")
require("dotenv").config()
const connectToDb = require("./src/config/database")
connectToDb();
app.listen(3000,function(){
    console.log("runinig on server 3000")
})