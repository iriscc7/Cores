import './App.css'
import TarjetaProd from './components/TarjetaProd'
import TopNav from './components/TopNav'


function App() {
  return (
    <>
    <TopNav/>
    <TarjetaProd nomp= "Laptop" prec ={1500} descrip = "Una potente laptop para trabajar y jugar "/>
    <TarjetaProd nomp= "Smartphone" prec ={800} descrip = "Un smartphone de última generación con una de las mejores cámaras"/>
    <TarjetaProd nomp= "Auriculares" prec ={200} descrip = "Auricularescon cancelación de ruido. No escucharás nada  a tu alrededor "/>
    <TarjetaProd nomp= "Monitor" prec ={300} descrip = "Monitor 4k para una experiencia visual increible."/>
    </>
  )
}

export default App
