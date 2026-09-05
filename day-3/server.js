const express = require("express")

const a =express()
a.use(express.json())

const notes=[]

a.post("/notes",function(req,res){
    console.log(req.body)
    notes.push(req.body)
    res.send("note created")
})
a.get("/notes",function(req,res){
    res.send(notes)
})
a.listen(3000,function(){
    console.log("server is running on port 3000")
})