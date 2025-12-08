import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect } from "react";


const FormUpdateCan = ({listcancion,setlistcancion})=>{
const empty = {
        title:"",
        artist:"",
        yearofr:"",
        genre:""
    }
const {id}= useParams()
const index = listcancion.findIndex((cancion)=>cancion._id ==id)
    const [data,setdata]= useState({...empty})
    const[errors,seterrors]=useState({
        title:"",
        artist:"",
        yearofr:"",
        genre:""
    })
    const updateState=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    const nav = useNavigate()

    const updatecan= (e)=>{
        e.preventDefault();
        const URL = `http://localhost:8083/api/cancion/${id}`
        axios.put(URL,data).then(
            response=>{
                const copylist = [...listcancion]
                copylist[index]=response.data;
                setlistcancion(copylist)
                nav(`/canciones/${id}`)
            }
        ).catch(
            e=>seterrors(e.response.data.errors)
        )
    }

    useEffect(()=>{
        const newArray=listcancion.find((cancion)=>cancion._id ==id)
        setdata(newArray?{...newArray}:{...empty})
    },[listcancion,id])

return(
        <>
        <h1>Actualiza una canción</h1>
        <form onSubmit={(e)=>updatecan(e)}>
            <div>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title" value={data.title} onChange={(e)=>{updateState(e)}}/>
            {errors.title && <p style={{color:"red"}} >{errors.title}</p>}
            </div>
            <br />
            <div>
            <label htmlFor="artist">Artist:</label>
            <input type="text" name="artist" id="artist" value={data.artist} onChange={(e)=>{updateState(e)}}/>
            {errors.artist && <p style={{color:"red"}} >{errors.artist}</p>}
            </div>
            <br />
            <div>
            <label htmlFor="yearofr">Year of realese:</label>
            <input type="text" name="yearofr" id="yearofr" value={data.yearofr} onChange={(e)=>{updateState(e)}}/>
            {errors.yearofr && <p style={{color:"red"}} >{errors.yearofr}</p>}
            </div>
            <br />
            <div>
            <label htmlFor="genre">Genre:</label>
            <input type="text" name="genre" id="genre" value={data.genre} onChange={(e)=>{updateState(e)}}/>
            {errors.genre && <p style={{color:"red"}} >{errors.genre}</p>}
            </div>
            <br />
            <button className="btn btn-info">Actualizar</button>
        </form>
        </>
    )
}


export default FormUpdateCan