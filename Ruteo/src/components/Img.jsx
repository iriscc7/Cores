import { useNavigate, useParams } from "react-router-dom";
import styles from './../css/Img.module.css'

const Img=({glist})=>{

    const params = useParams();
    const idparam = Number(params.id)
    const imagenes=glist.find((art,index)=> index==idparam)
    const navigate = useNavigate()
    return(
        <>
        <h1>{imagenes.name}</h1>
        <br />
        <img className={styles.img} src={imagenes.img} alt={imagenes.name} />
        <div>
            <button onClick={()=>navigate(`/art/${idparam-1}`)} className="btn btn-success" disabled={idparam===0}>Anterior</button>
            <button onClick={()=>navigate('/home')} className="btn btn-success">Inicio</button>
            <button onClick={()=>navigate(`/art/${idparam+1}`)} className="btn btn-success" disabled={idparam===(glist.length-1)}>Siguiente</button>
        </div>
        </>
    )
}

export default Img