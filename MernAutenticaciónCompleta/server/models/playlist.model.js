import {mongoose} from 'mongoose'
import { cancionSchema } from './cancion.model.js'


const playlistSchema =mongoose.Schema ({
    name:{
        type:String,
        required:[true,"This field is mandatory"],
        unique: true
    },
    canciones:[cancionSchema]
},
{timestamps: true}
)

const Playlist = mongoose.model("playlist",playlistSchema)

export default Playlist