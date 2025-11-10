import styles from './../css/TarjetaProd.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'  
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useState } from 'react'

const TarjetaProd =({nomp,prec,descrip,stock})=>{
    const [i,setCount]=useState(10);
    return (<div className={`card shadow-sm bg-light ${styles.tp}`}>
        <strong>{nomp}</strong>
        <p className='card-subtitle mb-2 text-body-secondary'>${prec}</p>
        <p className='card-text'>{descrip}</p>
        {i > 0 ? <p className={styles.e}>En stock {i}</p>: <p className={styles.a}>Agotado </p>}
        <button onClick={()=>setCount(i -1)} className='btn btn-primary'>Comprar </button>
    </div>)
}

export default TarjetaProd;