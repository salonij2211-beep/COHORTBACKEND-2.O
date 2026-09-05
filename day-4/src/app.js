// server ko create karna 
// server ko confirg krna

const express = require("express")

const a = express() //server create ho jata hain
a.use(express.json())
const notes =[]

a.get("/",function(req,res){
    res.send("hello")
})

// post /notes
a.post("/notes",function(req,res){
    console.log(req.body)
    notes.push(req.body)

    console.log(notes)
    res.send("saloni notes created")
})

// get /notes
a.get("/notes",function(req,res){
    res.send(notes)
})

//delete /notes
// param

a.delete("/notes/:index", (req,res) =>{
    delete notes[ req.params.index ]
    res.send("notes deleted successfully")
})

// patch /notes/:index
// req.body = {description:-"sample modifiled description"}

a.patch("/notes/:index", (req,res) =>{
   notes [req.params.index].std =req.body.std
   res.send("notes updated successfully")
})
module.exports=a//jo server create kiya use bhar bhej diya h