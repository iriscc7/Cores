import { useState } from 'react'
import Imagen from './components/Imagen'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

function App() {
  const [imagen, setImagen] = useState()
  return (
    <>
    <h1>Gatitos Api Axios</h1>
    <br />
    <img src={imagen} alt={imagen} height="300" className='border rounded border-info'/>
    <Imagen setImagen={setImagen}  />
    </>
  )
}

export default App
