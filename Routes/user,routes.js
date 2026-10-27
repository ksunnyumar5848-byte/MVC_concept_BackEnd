const express=require("express")
const route=express.Router()
const {userGet}=require('../controler/User_controler.js')

route.get('/user/v1',userGet)

module.exports=route

