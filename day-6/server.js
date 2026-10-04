
const app =require("./src/app");
const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://sjain:kwwyqLJtSW4mmT1d@cluster0.7bmxbnn.mongodb.net/day-6")
    .then(()=>{
        console.log("connect to database")
    })
    
}
connectToDb()
app.listen(3000,()=>{

    console.log("server is run on 3000")
})

