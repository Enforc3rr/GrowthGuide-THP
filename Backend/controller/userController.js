const userDatabase = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.userSignUp = async (req,res)=>{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password , salt);
    const userWithHashedPassword = {
        username : req.body.username ,
        password : hashedPassword
    };
    await userDatabase.create(userWithHashedPassword);

    return res.status(201).json({
        status : "Passed",
        Message : "User Registered"
    });
}

exports.userLogin = async (req,res)=>{
    const userFound = await userDatabase.findOne({username : req.body.username});
    if(!userFound){
        return res.status(400).json({
            loginStatus : "Failed",
            message : "user not found"
        });
    }
    const validatePassword = await bcrypt.compare(req.body.password,userFound.password);
    if(!validatePassword){
        return res.status(400).json({
            loginStatus : "Failed",
            message : "password wrong"
        });
    }
    const token = await jwt.sign({
        userId : userFound._id
    },process.env.SECRETKEY,{
        expiresIn : "24h"
    });

    return res.status(200).json({
       loginStatus : "Success",
       message : "Login Successful",
       jwt : token
    });
}