
const jwt = require('jsonwebtoken')

const Registerdata = require('../model/authschema')
const login=(req,res)=>{
console.log("testing")
   const {name,password} = req.body
   const loginobj ={name,password}
   const token =jwt.sign(name,"lovekal123@")
    console.log(token)
res.send("hello login")    
}

const Register = async (req, res) => {
    const Ruser = new Registerdata(req.body)
    console.log(req.body)
   const data= await Ruser.save()
    res.send(data)
    
}

module.exports ={login,Register}