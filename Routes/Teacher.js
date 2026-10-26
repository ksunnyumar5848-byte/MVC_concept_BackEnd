const express=require("express")
const route=express.Router()

route.get("/teacher/gaurav_sir_123",(req,res)=>{
    res.send("hi i am the gaurav sir how can help you ")
})
route.post("/teacher/gaurav_sir_123",(req,res)=>{
    res.send("hi i am the gaurav sir how can help you ")
})

module.exports=route

