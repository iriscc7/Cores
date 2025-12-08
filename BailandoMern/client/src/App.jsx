import { useState } from 'react'
import './App.css'
import { Route,Routes,Link,NavLink } from 'react-router-dom'
import CancionApi from './components/CancionApi.jsx'
import PlaylistApi from './components/PlaylistApi.jsx'
import Listcan from './views/Listcan.jsx'
import Cancion from './views/Cancion.jsx'
import Playlist from './views/Playlist.jsx'
import Notfound from './views/Notfound.jsx'
import FormCancion from './views/FormCancion.jsx'
import Listplaylist from './views/Listplaylist.jsx'
import NewPlaylist from './views/NewPlaylist.jsx'
import Home from './views/Home.jsx'


function App() {
const [listcancion,setlistcancion]= useState([]);
const [listplaylist,setlistplaylist]=useState([]);

  return (
    <>
    
      <CancionApi setlistcancion={setlistcancion} />
      <PlaylistApi setlistplaylist={setlistplaylist}/>
      <NavLink to={'/'}>Home </NavLink>|<NavLink to={'canciones'}>Todas las canciones </NavLink>|<NavLink to={'/canciones/new'}>Crear nueva canción </NavLink>|
      <NavLink to={'playlist'}>Todas las playlist </NavLink>| <NavLink to={'/playlist/new'}>Crear nueva playlist</NavLink>

      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/canciones' element={<Listcan listcancion={listcancion}/>}/>
        <Route path='/playlist' element={<Listplaylist listplaylist={listplaylist}/>}/>
        <Route path='/canciones/:id' element={<Cancion listcancion={listcancion} setlistcancion={setlistcancion}/>}/>
        <Route path='/playlist/:id' element={<Playlist listplaylist={listplaylist} setlistplaylist={setlistplaylist} />}/>
        <Route  path='*' element={<Notfound/>}/>
        <Route path='/canciones/new'element={<FormCancion listcancion={listcancion} setlistcancion={setlistcancion}/>}/>
        <Route path='/playlist/new' element={<NewPlaylist listplaylist={listplaylist} setlistplaylist={setlistplaylist} /> }/>
      </Routes>


    </>
  )
}

// 53:04
export default App
