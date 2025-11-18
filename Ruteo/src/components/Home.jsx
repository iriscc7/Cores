import { Link } from "react-router-dom"
import styles from './../css/Home.module.css'

const Home=({glist})=>{
    return(
        <>
        <h1>Bienvenido a la galería del arte futurista</h1>
        <br />
        <ul>
            {glist.map((art,index)=><li key={index} className={styles.list}><Link to={`/art/${index}`}>{art.name}</Link></li>)}
        </ul>
        </>
    )
}
export default Home