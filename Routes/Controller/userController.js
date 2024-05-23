const users = require('../Model/userModel')
const jwt = require('jsonwebtoken')

exports.Register = async(req,res)=>{
    console.log("Inside Register Request");
    const{Username,Email,Password} = (req.body);
    console.log(Username,Email,Password);
    try{
        const ExistingUser = await users.findOne({Email})
        if(ExistingUser){
            res.status(406).json("User Already Exist")
        }
        else{
            const newuser = new users({
                Username,Email,Password
            })
            await newuser.save()
            res.status(200).json(newuser)
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.login = async (req,res)=>{
    console.log("Control Inside Login Request");
    const {Email,Password} = (req.body)
    console.log({Email,Password});
    try{
        const existinguser = await users.findOne({Email,Password})
        if(existinguser){
            const token = jwt.sign({userId:existinguser._id},process.env.jwt_secret)
            res.status(200).json({existinguser,token})
        }
        else{
            res.status(406).json("Invalid Username or Password")
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}