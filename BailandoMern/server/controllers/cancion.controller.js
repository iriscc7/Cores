import {Cancion} from "../models/cancion.model.js"

const cancioncntrll = {

    getAll:async (req,res)=>{
        try{
            const cancion = await Cancion.find();
            return res.status(201).json(cancion)
        }catch(e){
            return res.status(400).json(e)
        }
    },
    createone: async (req,res)=>{
        const{title,artist,yearofr,genre}= req.body;
        const newarray={title,artist,yearofr,genre}
        try{
            const newcan = await Cancion.create(newarray)
            res.status(201).json(newcan)
        }catch(e){
             //Orden para errores:
            const messages={} ;
            if(e.name==="ValidationError"){
                Object.keys(e.errors).forEach(key=>{
                    messages[key]=e.errors[key].message;
                })
            }
            return res.status(400).json({errors:{...messages}})
        }
    },
    getone:async (req,res)=>{
        const id = req.params.id;
        try{
            const onecan = await Cancion.findById(id)
            if(!onecan){
                return res.status(404).json({message:"The id doesn't exist"})
            }
            res.status(201).json(onecan)
        }catch(e){
            return res.status(400).json(e)
        }
    },
    deleteone:async(req,res)=>{
        const id = req.params.id;
        try{
            const delcan = await Cancion.findByIdAndDelete(id)
            if(!delcan){
                return res.status(404).json({message:"The id doesn't exist"})
            }
            res.status(201).json({message: "The song was deleted"})
        }catch(e){
            return res.status(400).json(e)
        }
    },
    updateone:async(req,res)=>{
        const id = req.params.id;
        const{title,artist,yearofr,genre}= req.body;
        const newdata={};
        if(title){
            newdata.title=title
        }
        if(artist){
            newdata.artist=artist
        }
        if(yearofr){
            newdata.yearofr=yearofr
        }
        if(genre){
            newdata.genre=genre
        }
        try{
            const updateone = await Cancion.findByIdAndUpdate(id,newdata,{new:true,runValidators:true})
            if(!updateone){
                return res.status(404).json({message:"The id doesn't exist"})
            }
            res.status(201).json(updateone)
        }catch(e){
             //Orden para errores:
            const messages={} ;
            if(e.name==="ValidationError"){
                Object.keys(e.errors).forEach(key=>{
                    messages[key]=e.errors[key].message;
                })
            }
            return res.status(400).json({errors:{...messages}})
        }
    }
}

export default cancioncntrll