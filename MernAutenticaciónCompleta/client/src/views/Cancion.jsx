import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import styles from './../css/Cancion.module.css'
import Notfound from "./Notfound";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

const Cancion = ({listcancion,setlistcancion})=>{
    const[can,setcan]=useState({})
    const[error,seterror]=useState(``)
    const {id}= useParams();
    const URL= `http://localhost:8083/api/cancion/${id}`
    const navigate =useNavigate()
    const getdata =()=>{
        axios(URL).then(response=>
            setcan(response.data)
        ).catch(
            e=>seterror(e)
        )
    }

    const upt = ()=>{
        navigate(`/canciones/update/${id}`)
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
                setlistcancion(listcancion.filter(cancion=>cancion._id !=id)),
                navigate('/canciones')
            } 
        ).catch(
            e=>console.log(e)
        )
    }


    return(
        <>
        <div styles={styles.d}>
            <h1>Detalles de la canción </h1>
            <p>Title: {can.title}</p>
            <p>Artist: {can.artist}</p>
            <p>Year of Realese: {can.yearofr}</p>
            <p>Genre: {can.genre}</p>
            <button onClick={delet} className="btn btn-info">Eliminar</button>
            <button onClick={upt} className="btn btn-info">Actualizar</button>
        </div>
        </>
    )
}

export default Cancion