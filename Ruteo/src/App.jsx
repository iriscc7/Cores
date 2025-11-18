import {Navigate,Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Img from './components/Img';

function App() {
const glist=[
  {name:'Fuera de este Mundo', author:'Iris C',img:'https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2020/08/01/5faa6f1f18e2b.jpeg'},
  {name:'Pacientes Holográficos', author:'Iris C',img:'https://astrocamp.org/wp-content/uploads/2017/07/pretty-ball.gif'},
  {name:'Lo Alto del Dinero', author:'Iris C',img:'https://gifdb.com/images/high/cash-498-x-371-gif-ifqs3hknfqr8tqbf.gif'},
  {name:'Nada como la Privacidad del Hogar', author:'Iris C',img:'https://img.freepik.com/fotos-premium/conexion-tecnologia-digital-inteligente-hogar-inmobiliaria-casa-moderna-inalambrica_941600-20769.jpg?semt=ais_incoming&w=740&q=80'},
  {name:'Moverse en la Ciudad', author:'Iris C',img:'https://www.clarin.com/2020/05/21/nLw6ROzMN_1200x0__1.jpg'},
  {name:'Diversión de Otro Planeta', author:'Iris C',img:'https://science.nasa.gov/wp-content/uploads/2024/02/pia24542-first-selfie-figure-1.gif?w=1536'},
  {name:'Espectáculo de la Galaxia', author:'Iris C',img:'https://scitechdaily.com/images/Spiral-Galaxy.gif'},
  {name:'Taxistas', author:'Iris C',img:'https://gifdb.com/images/high/taxi-driver-travis-bickle-inside-parked-vehicle-pgzok5hl6mfp7tce.gif'}
]


  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="home"/>}></Route>
        <Route path='/home' element={<Home glist={glist} />}></Route>
        <Route path='/art/:id' element={<Img glist={glist}/>}></Route>
      </Routes>
    </>
  )
}

export default App
