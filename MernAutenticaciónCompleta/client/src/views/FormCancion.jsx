import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const FormCancion = ({listcancion,setlistcancion})=>{
    const [data,setdata]= useState({
        title:"",
        artist:"",
        yearofr:0,
        genre:""
    })

    const[errors,seterrors]=useState({
        title:"",
        artist:"",
        yearofr:"",
        genre:""
    })

    const navigate = useNavigate()

    const updateState=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    const add=(e)=>{ 
        e.preventDefault()
        const URL = `http://localhost:8083/api/cancion`
        axios.post(URL,data).then(
            response=>{
                setlistcancion([...listcancion,response.data])
                navigate('/canciones')
            }
        ).catch(
            e=>seterrors(e.response.data.errors)
        )
    }
    return(
        <>
        <h1>Crea una nueva canción</h1>
        <form onSubmit={(e)=>add(e)}>
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
            {errors.title && <p style={{color:"red"}} >{errors.title}</p>}
            </div>
            <br />
            <button className="btn btn-info">Crear</button>
        </form>
        </>
    )
}

export default FormCancion