import Playlist from "../models/playlist.model.js";
import { Cancion } from "../models/cancion.model.js";

const playlistcntrll = {
    getAll: async (req, res) => {
        try {
        const playlist = await Playlist.find();
        return res.status(201).json(playlist);
        } catch (e) {
        return res.status(400).json(e);
        }
    },
    getone:async (req,res)=>{
            const id = req.params.id;
            try{
                const oneplay = await Playlist.findById(id)
                if(!oneplay){
                    return res.status(404).json({message:"The id doesn't exist"})
                }
                res.status(201).json(oneplay)
            }catch(e){
                return res.status(400).json(e)
            }
        },
    createone: async (req, res) => {
        const {name,canciones} = req.body;
        try{
            const fcanciones = await Cancion.find({title :{$in : canciones}})
            if(fcanciones.length !== canciones.length){
                return res.status(400).json({message: "Songs aren't founded"});
            }
            const newarray = {name : name, canciones:fcanciones}
            const newplaylist = await Playlist.create(newarray)
            res.status(201).json(newplaylist)
        }catch(e){
            return res.status(400).json(e)
        }
    },
        deleteone:async(req,res)=>{
        const id = req.params.id;
        try{
            const delplay = await Playlist.findByIdAndDelete(id)
            if(!delplay){
                return res.status(404).json({message:"The id doesn't exist"})
            }
            res.status(201).json({message: "The playlist was deleted"})
        }catch(e){
            return res.status(400).json(e)
        }
},
}

export default playlistcntrll;
