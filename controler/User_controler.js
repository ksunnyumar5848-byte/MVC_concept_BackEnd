const userdata=require('../model/usermodel.js')

const userGet= async (req,res)=>{

   const alluser=await userdata.find()
    res.send(alluser)
}
const userPost=async (req,res)=>{

  
    const formdata=req.body
     const createdate= await userdata.create({
        name:formdata.name,
        email:formdata.email,
        password:formdata.password,
        isverified:formdata.isverified,
        number:formdata.number
     })

    // .send({
    //     message:"hello i am the user/v1 url i send the response  i am the post methods ",
    //     showinfo:formdata
    // })

    res.send(createdate)

    

}

module.exports={userGet,userPost}