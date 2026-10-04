const express = require("express")
const notemodel = require("./models/note.model")
const app = express();

//post api
app.use(express.json())
app.post("/notes", async(req,res) =>{
    const{ title, description, age} = req.body

   const note = await notemodel.create({
        title, description, age
    })

    res.status(201).json({
        message:"notes created succefully",
        note
    })
})
module.exports = app