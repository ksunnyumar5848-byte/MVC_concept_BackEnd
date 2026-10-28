const mongoose=require("mongoose")

// this schema are the document 

const userschema=mongoose.Schema({
    name:String,
    age:Number,
    marks:Number,
    salary:Number,
    profission:String
},
{
    timestamps:true
})



let User=mongoose.model("UserGroup",userschema)

module.exports=User