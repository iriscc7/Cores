import { useState } from "react"
import styles from './../css/Form.module.css'


const Form = ({lnotes,setlnotes})=>{
    const[note,setNote]=useState('')
    const[priority,setPriority]=useState('')

    const addn=(e)=>{
        e.preventDefault()
        setlnotes([...lnotes,{note,priority}])
    }

    return(
        <>
        <div>
            <form onSubmit={e=>addn(e)} >
                <div>
                    <input type="text" placeholder="Write a title" className="input-group-text" name="note" id={styles.note} value={note} onChange={e => setNote(e.target.value)} />
                </div>
                <br />
                <div>
                    <select className="form-select" name="priority " id={styles.priority} value={priority} onChange={e=> setPriority(e.target.value)}>
                        <option value="---">---</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <br />
                <button className={`btn btn-primary ${styles.btn}`}>Add Note</button>
            </form>
        </div>
        </>
    )
}

export default Form