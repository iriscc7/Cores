import { mongoose } from "mongoose";

const cancionSchema = mongoose.Schema(
    {
        title:{
            type:String,
            minlength:[6,"The title is to short"],
            maxlength:[255,"The title is to long"],
            required:[true,"This field is mandatory"]
        },
        artist:{
            type:String,
            minlength:[10,"The artist's name is to short"],
            maxlength:[255,"The artist's name is to long"],
            required:[true,"This field is mandatory"]
        },
        yearofr:{
            type:Number,
            min:[1900,"That song is to old"],
            max:[2025,"That song doesn't exist"],
            required:[true,"This field is mandatory"]
        },
        genre:{
            type:String,
            required:[true,"This field is mandatory"]
        }
    },
    {timestamps:true}
)

const Cancion =  mongoose.model('cancion',cancionSchema)

export default Cancion