const express=require("express")
const route=express.Router()
const {userGet,userPost}=require('../controler/User_controler.js')

route.get('/user/v1',userGet)
route.post('/user/v1',userPost)
module.exports=route

