const  User=require('../model/usermodel')

const express=require('express')

const route=express.Router()

const bcrypt=require('bcrypt')


async function UserRegistion(req,res){


    const data=req.body

    const salt=await bcrypt.genSalt()

    const hashpassword= await bcrypt.hash(data.password,salt)



   const Usercreate=  await User.create({
        "name":data.name,
        "age":data.age,
        "profission":data.profission,
        "email":data.email,
        "password":hashpassword

    })

    res.send({
        "message":"student registion are the successful  ..... !  ",
        "userinformation":Usercreate
    })

}


route.post("/Regisition",UserRegistion)



module.exports=route