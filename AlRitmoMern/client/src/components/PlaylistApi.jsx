import axios from 'axios';
import { useEffect } from 'react';

const PlaylistApi=({setlistplaylist})=>{
    const getdataplay=()=>{
        const URL = 'http://localhost:8082/api/playlist'
        axios(URL).then(response =>{
            setlistplaylist(response.data)
        }).catch((e=>console.log(e)))
}
    useEffect(()=>{
        getdataplay()
    },[])

    return(
        <>
        
        </>
    )
}

export default PlaylistApi