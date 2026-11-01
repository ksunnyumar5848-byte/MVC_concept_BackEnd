

function Agevalidation(req,res,next){

    let age=24

    if (age>18){
       console.log("user are the valid user because age is above the 18 ")
    }

    next()

}

module.exports={Agevalidation}