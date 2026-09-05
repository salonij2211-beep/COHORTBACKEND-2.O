const exp = require("express")

const a = exp()// server instance create karna

a.get("/",function(req,res){
    res.send("hello")
})

a.get("/about",function(req,res){
    res.send("first of this is my about page and my name is saloni jain i am from gwalior")
})

a.get("/home",function(req,res){
    res.send("this is my home page")
})
a.listen(3000, function(){
    console.log("server is running on port 3000")
})//server start karna