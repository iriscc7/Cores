import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Form from './components/Form';
import { useState } from 'react';
import Filtro from './components/Filtro';
import Nota from './components/Nota';

function App() {

  const [lnotes,setlnotes]=useState([])
  const[filtro,setfiltro]=useState('')

const lfiltro = (filtro === 'All' || !filtro)? lnotes: lnotes.filter(note => note.priority === filtro)

  return (
    <>
    <div className='card'style={{width:'25rem'}}>
      <div className='card-header'>
        <h1>Notes</h1>
        <Form lnotes={lnotes} setlnotes={setlnotes}/>
      </div>
      <div className='card-body'>
        <Filtro filtro={filtro} setfiltro={setfiltro} />
        <br />
        {lfiltro.map((note,index)=><Nota note={note.note} priority={note.priority} lnotes={lnotes} setlnotes={setlnotes} index={index} />)}
      </div>
      <div className='card-footer'>
        <p>By Iris</p>
      </div>
    </div>
    </>
  )
}

export default App
