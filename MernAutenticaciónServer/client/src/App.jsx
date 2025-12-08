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
import FormUpdateCan from './views/FormUpdateCan.jsx'
import FormUpdatePlay from './views/FormUpdatePlay.jsx'
import Login from './views/Login.jsx'
import { useNavigate } from 'react-router-dom';
import Registro from './views/Registro.jsx'


function App() {
const [listcancion,setlistcancion]= useState([]);
const [listplaylist,setlistplaylist]=useState([]);
const [login,setlogin]=useState(false)
const[registro,setregistro]=useState(false)
  const navigate = useNavigate();

  const logOut = ()=>{
    localStorage.removeItem("token")
    setlogin(false)
    navigate('/login')
  }

  return (
    <>
    <hr />
      {login && <button onClick={logOut}>Log out</button>}
      <hr />

    {(login)?
    <><Link to={'/'}>Home </Link>|<Link to={'canciones'}>Todas las canciones </Link>|<Link to={'/canciones/new'}>Crear nueva canción </Link>|
      <Link to={'playlist'}>Todas las playlist </Link>| <Link to={'/playlist/new'}>Crear nueva playlist</Link></>:
    <><Link to={'/login'}>Login </Link>|<Link to={'/registro'}>Registro</Link>
    </>}

      <CancionApi setlistcancion={setlistcancion} />
      <PlaylistApi setlistplaylist={setlistplaylist}/>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/canciones' element={<Listcan listcancion={listcancion}/>}/>
        <Route path='/playlist' element={<Listplaylist listplaylist={listplaylist}/>}/>
        <Route path='/canciones/:id' element={<Cancion listcancion={listcancion} setlistcancion={setlistcancion}/>}/>
        <Route path='/playlist/:id' element={<Playlist listplaylist={listplaylist} setlistplaylist={setlistplaylist} />}/>
        <Route  path='*' element={<Notfound/>}/>
        <Route path='/canciones/new'element={<FormCancion listcancion={listcancion} setlistcancion={setlistcancion}/>}/>
        <Route path='/playlist/new' element={<NewPlaylist listplaylist={listplaylist} setlistplaylist={setlistplaylist} /> }/>
        <Route path='/canciones/update/:id' element={<FormUpdateCan listcancion={listcancion} setlistcancion={setlistcancion} />}/>
        <Route path='/playlist/update/:id' element={<FormUpdatePlay listplaylist={listplaylist} setlistplaylist={setlistplaylist} />}/>
        <Route path='/login' element={<Login setlogin={setlogin}/> }/>
        <Route path='/registro' element={<Registro setregistro={setregistro}/> }/>
      </Routes>


    </>
  )
}

// 53:04
export default App
