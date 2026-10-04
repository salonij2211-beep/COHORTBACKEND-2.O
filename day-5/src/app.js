//server ko create karna 
//server ko confirg karna

const express = require("express")
const a =express()

a.use(express.json())
const notes=[]

//post/notes api-creted
a.post("/notes",function(req,res){
   
    notes.push(req.body)
    res.status(201).json({
    massage:"note is create"
    })//mainly response ase bheja jata h
})
//get/notes -server se send data client 
a.get("/notes",function(req,res){
    res.status(200).json({
        notes:notes//ek hi bar me share kar dega
    })

})
//delet/notes:index
a.delete("/notes/:index",function(req,res){
    delete notes[req.params.index]

    res.status(204).json({
   massage:"notes is deletes"
    })

})
//patch /notes/:index
a.patch("/notes/:index",function(req,res){
notes[req.params.index].age=req.body.age
res.status(200).json({
    massage:"notes is updated"
})
})
module.exports=a