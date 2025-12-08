import {User} from '../models/users.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const SECRET=process.env.SECRET

const usercntrll= {
getAll: async(req,res)=>{
    try{
        const allusers  =await User.find()
        return res.status(201).json(allusers)
    }catch(e){
        return res.status(400).json(e)
        }
    },
createone:async(req,res)=>{
    const {firtsName,lastName,email,password,passwordconfir} = req.body
    const newArray =  {firtsName,lastName,email,password,passwordconfir}
    try{
        const newUser = await User.create(newArray)

        const savetoken ={
            firtsName:newUser.firtsName,
            lastName:newUser.lastName,
            email:newUser.email,
            id:newUser._id
        }
        jwt.sign(savetoken,SECRET,{expiresIn:"1m"},(err,token)=>{
            return res.status(201).json({token})
        })
        
    }catch(e){
    const messages={} ;
            if(e.name==="ValidationError"){
                Object.keys(e.errors).forEach(key=>{
                    messages[key]=e.errors[key].message;
                })
            }
        return res.status(400).json({errors:{...messages}})
        }
    },
login:async(req,res)=>{
    const{email,password}=req.body
    const currentuser = await User.findOne({email})
    if(!currentuser){
        return res.status(404).json({errors:{email:"The email does not exist"}})
    }
    const bcryptres= await bcrypt.compare(password,currentuser.password)   
    if(!bcryptres){
        return res.status(404).json({errors:{password:"The credential do not match"}})
    }
    const savetoken ={
            firtsName:currentuser.firtsName,
            lastName:currentuser.lastName,
            email:currentuser.email,
            id:currentuser._id
        }
        jwt.sign(savetoken,SECRET,{expiresIn:"1m"},(err,token)=>{
            return res.status(201).json({token})
        })
    
}
}

export default usercntrll