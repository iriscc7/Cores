import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import styles from './../css/Cancion.module.css'
import Notfound from "./Notfound.jsx";

const Playlist = ({listplaylist,setlistplaylist})=>{
    const[play,setplay]=useState({})
    const[error,seterror]=useState(``)
    const {id}= useParams();
    const URL= `http://localhost:8083/api/playlist/${id}`

        const navigate = useNavigate()
    const getdata =()=>{
        axios(URL).then(response=>
            setplay(response.data)
        ).catch(
            e=>seterror(e)
        )
    }

    useEffect(()=>{
        getdata()
    },[])

    if(error){
        return <Notfound/>
    }

    const delet =()=>{
        axios.delete(URL).then(
            response =>{
                setlistplaylist(listplaylist.filter(p=>p._id !=id)),
                navigate('/playlist')
            } 
        ).catch(
            e=>console.log(e)
        )
    }
const upt = ()=>{
    navigate(`/playlist/update/${id}`)
}

    return(
        <>
        <div>
            <h1>Detalles de la playlist </h1>
            <p>Name: {play.name}</p>
            <p>Songs: </p>
             <ul>
          {play.canciones?.map((can, index) => (
            <li key={index}>
             <p>Title: {can.title} by {can.artist} | {can.yearofr} | {can.genre}</p>
            </li>
          ))}
        </ul>
        <button className="btn btn-info" onClick={delet}>Eliminar Playlist</button> |<button className="btn btn-info" onClick={upt} >Actualizar Playlist</button>
        </div>
        </>
    )
}

export default Playlist