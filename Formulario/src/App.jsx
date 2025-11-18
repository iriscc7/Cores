import 'bootstrap/dist/css/bootstrap.min.css'  
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Form from './components/Form'
import { useState } from 'react'

function App() {
const [data,setdata]=useState([])
  return (
    <>
    <header>
      <h1>Bienvenido a la liga de superhéroes</h1>
      <br/>
    </header>
    <main>
      <Form data={data} setdata={setdata}/>
    </main>
    <footer>

    </footer>
    </>
  )
}

export default App
