import { Link } from "react-router-dom"
import styles from './../css/Listplaylist.module.css'

const Listplaylist = ({listplaylist})=>{
    return(
        <>
        <div>
            <h1>Todas las Playlist</h1>
            <ol>
                {listplaylist.map((playlist,index)=><li key={index} >
                    <Link className={styles.link} to={`/playlist/${playlist._id}`}>{playlist.name}</Link> </li>)}
            </ol>
        </div>
        </>
    )
}

export default Listplaylist