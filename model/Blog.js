const mongoose=require("mongoose")

const BlogSchema=mongoose.Schema({
   
   title:String,
   content:String,
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:UserGroup
   }
    
},{
    timestamps:true
})

let BlogSchemaInfo=mongoose.model("Blog",BlogSchema)

module.exports=BlogSchemaInfo