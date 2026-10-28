const express=require("express")
const app=express();
const TeacherRoutes=require('./Routes/Teacher.js')
const mongoose=require('mongoose')
const Physics=require('./Routes/Book_product.js');
const UserRouter=require('./Routes/user,routes.js')
const {Connect_to_database}=require('./config/DB.js');
const User=require('./model/User.js')


Connect_to_database()
app.use(express.json())
app.use(express.urlencoded())




app.use("/gaurav_sir",TeacherRoutes)
app.use("/book_123",Physics)


// create the api 
app.use("/user",UserRouter)


// this methods are the create the userDocument 
app.post('/usercreate',async (req,res)=>{

    const formdata=req.body


   const usercreate=await User.create({
        name:formdata.name,
        age:formdata.age,
        marks:formdata.marks,
        salary:formdata.salary,
        profission:formdata.profission
    })

    res.send(usercreate)

})



app.listen(3001,()=>{
    console.log("srever are listing the port number 3001")
})