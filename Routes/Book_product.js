const express=require("express")
// const { route } = require("./Teacher")
const {getDATA}=require('../controler/physics_page.js')

const route_page =express.Router()
 
route_page.get("/class_12_physics",getDATA)
route_page.post("/class_12_physics",(req,res)=>{
   res.send("hello sunny i ma the post methods i use the url class_12_physics  ") 
})

module.exports=route_page