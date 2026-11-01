
const User=require('../model/usermodel')

const express=require("express")

const route=express.Router()

const bcrypt=require('bcrypt')



async function LoginStudent(req,res){

    const {email,password}=req.body

    let user= await User.findOne({email})

    if(!user){
        res.json("user are not login ") 
    }

    const comparepassword= await bcrypt.compare(password,user.password)

    if(!comparepassword){
        res.json("password are the missmatch please check your password ")
    }

    res.send("user are the Login ")

}

route.post("/login",LoginStudent)


module.exports=route