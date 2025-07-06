
const jwt = require('jsonwebtoken')


const login=(req,res)=>{
console.log("testing")
   const {name,password} = req.body
   const loginobj ={name,password}
   const token =jwt.sign(name,"lovekal123@")
    console.log(token)
res.send("hello login")    
}

const Register =(req,res)=>{
    console.log("hello Register")
    res.send("hello Register")
}

module.exports ={login,Register}