import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login=({setlogin})=>{
    const[state,setstate]=useState({
        email:'',
        password:''
    })
    const[errors,seterrors]=useState({})

    const navigate = useNavigate()

    const updatestate = (e)=>{
        setstate({...state,[e.target.name]: e.target.value})
    }

    const loginProcess = (e)=>{
        e.preventDefault();
        const URL='http://localhost:8083/api/users/login'
        axios.post(URL,state).then(
            response=>{
                localStorage.setItem("token",response.data.token)
                setlogin(true)
                seterrors({})
                navigate('/canciones')
            }
        ).catch(e=>seterrors(e.response.data.errors))
    }

    return(
        <>
        <form onSubmit={e=>loginProcess(e)} >
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={state.email} onChange={(e)=>updatestate(e)} />
            {errors.email && <p style={{color:"red"}} >{errors.email}</p>}

        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={state.password} onChange={(e)=>updatestate(e)} />
            {errors.password && <p style={{color:"red"}} >{errors.password}</p>}
        </div>
        <br />
        <button className="btn btn-info">Login</button>
        </form>

        </>
    )
}

export default Login