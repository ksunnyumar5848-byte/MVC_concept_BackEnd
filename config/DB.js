const mongoose=require('mongoose')

async function Connect_to_database(){
   await mongoose.connect('mongodb://127.0.0.1:27017/test')
   console.log("Connect to the data base sunny your server connect with mongodb database ")
}

module.exports={Connect_to_database}