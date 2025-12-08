import axios from 'axios'
import { useEffect } from 'react'

const CancionApi = ({setlistcancion})=>{
    const getdatacan = ()=>{
        const URL = 'http://localhost:8082/api/cancion'
        axios(URL).then(response =>{
            setlistcancion(response.data)
        }).catch((e=>console.log(e)))
    }

    useEffect(()=>{
        getdatacan()
    },[])

    return(
        <>

        </>
    )
}

export default CancionApi