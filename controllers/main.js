const { use } = require('express/lib/router');
const badrequest = require('../errors');
const jwt = require('jsonwebtoken');

const login = async (req,res)=>{
    const {username,password} = req.body;
    if(!username||!password){
        throw new badrequest('please provide email and password');
    }
    const id = new Date().getDate();
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'});
    res.status(200).json({msg:'user created',token});
}
const dashboard = async (req,res)=>{
    
    //console.log(req.user);
    const luckynumber = Math.floor(Math.random()*100);
    res.status(200).json({msg:`hello,${req.user.username}`,secret:`here is your authorized data ,your lucky number is ${luckynumber}`}); 
    //console.log(token);
}


module.exports = {
    login,dashboard
}