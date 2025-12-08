import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const CancionApi = ({setlistcancion, login, setlogin})=>{
        const navigate = useNavigate();
    const getdatacan = ()=>{
        const URL = 'http://localhost:8083/api/cancion'
        axios(URL, {headers : {token_user : localStorage.getItem("token")}}).then(response =>{
            setlistcancion(response.data)
        }).catch((e=> 
        {
            navigate('login')
            setlogin(false)
        }
        ))
    }

    useEffect(()=>{
        getdatacan()
    },[login])

    return(
        <>

        </>
    )
}

export default CancionApi