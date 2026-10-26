const express=require("express")
const app=express();
const TeacherRoutes=require('./Routes/Teacher.js')


const Physics=require('./Routes/Book_product.js')

app.use(express.json())
app.use(express.urlencoded())

app.use("/gaurav_sir",TeacherRoutes)
app.use("/book_123",Physics)

app.listen(3001,()=>{
    console.log("srever are listing the port number 3001")
})