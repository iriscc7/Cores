import styles from './../css/Nota.module.css'

const Nota = ({note,priority,setlnotes,lnotes,index})=>{

    const dlt =()=>{
        setlnotes(lnotes.filter((note,i)=> i!=index))
    }
return(
    <>
    <div className={`border bg-light ${styles.d}`}> 
        <p>{note} <span className={priority==="High"?styles.h: priority==="Low"?styles.l:styles.m} >{priority}</span> </p>
        <button className='btn btn-danger'onClick={dlt} >Eliminar</button>
    </div>
    </>
)
}

export default Nota 