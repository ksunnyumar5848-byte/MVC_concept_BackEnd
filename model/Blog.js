const mongoose=require("mongoose")

const BlogSchema=mongoose.Schema({
   
   title:String,
   content:String,
    user:{
     type:mongoose.Schema.Types.ObjectId,
     ref: "User"
   }
    
},{
    timestamps:true
})

let Blog=mongoose.model("Blog",BlogSchema)

module.exports=Blog