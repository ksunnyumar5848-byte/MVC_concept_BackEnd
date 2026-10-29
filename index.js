const express=require("express")
const app=express();
const TeacherRoutes=require('./Routes/Teacher.js')
const mongoose=require('mongoose')
const Physics=require('./Routes/Book_product.js');
const UserRouter=require('./Routes/user,routes.js')
const {Connect_to_database}=require('./config/DB.js');
const User=require('./model/usermodel.js')

const Blog= require('./model/Blog.js')


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

// read the how many document and collection store in the data base 


app.get("/all-user",async (req,res)=>{
  
  const totaluser= await User.find()
    res.send(totaluser)

})


app.get('/kuchu-puchu/:id',async (req,res)=>{

    const {id}=req.params

      const uniqueUser= await User.findById(id)

     res.send(uniqueUser)


})



// delete the user with unique id 
app.delete('/delete/:id', async (req,res)=>{

  const {id}=req.params

  let deleteuser= await User.findByIdAndDelete(id)

  res.send(deleteuser)

})


// 6ae18d206d414f19104d06b3
//6ae18d036d414f19104d06b2
// 6ae19a98bd34dee3ea146a18




//  6ae19accbd34dee3ea146a19


// /update/6ae19accbd34dee3ea146a19  this url are the update roshan name 
// here this methods are the update the document info 

app.put('/update/:id',async(req,res)=>{

    const {id}=req.params
    console.log(id)

    const formData=req.body
    console.log(formData)
    const updateuser= await User.findByIdAndUpdate(id,formData,{new:true})
    console.log(updateuser)
    res.send(updateuser)
})


// blog are the created methods are use to 

app.post('/blog',async (req,res)=>{

    const formdata=req.body
     await Blog.create({
         title:formdata.title,
         content:formdata.content
      }
      )

    res.send("blog are the created bro ")
})


app.get('/blog_read',async(req,res)=>{

    const bloguser=  await Blog.find()
     
    res.send({
        message: "blod are the read Successfull .... ! 💘💘😘    ",
        info:bloguser
    }
        
)
})







app.listen(3001,()=>{
    console.log("srever are listing the port number 3001")
})