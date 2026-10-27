const mongoose=require("mongoose")

// this schema are the document 

const userschema=mongoose.Schema({
    name:String,
    email:String,
    password:Number,
    isVerified:Boolean,
    phone:Number
},{
    timestamps:true
})



mongoose.model("UserGroup",userschema)