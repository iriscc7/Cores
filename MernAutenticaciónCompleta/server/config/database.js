import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const cdb= process.env.DB

const tcdb= async ()=>{
    try{
        await connect(cdb)
        console.log(`db connected`)
    }catch(e){
        console.log(`db is not connected`,e)
    }
}

export default tcdb