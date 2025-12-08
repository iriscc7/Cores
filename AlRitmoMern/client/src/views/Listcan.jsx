import { Link } from "react-router-dom"
import styles from './../css/Listcan.module.css'

const Listcan = ({listcancion})=>{
    return(
        <>
        <div>
            <h1>Todas las Canciones</h1>
            <ol>
                {listcancion.map((cancion,index)=><li key={index} >
                    <Link className={styles.link} to={`/canciones/${cancion._id}`}>{cancion.title} by {cancion.artist} ( {cancion.genre} )</Link> </li>)}
            </ol>
        </div>
        </>
    )
}

export default Listcan