import { useState } from "react"

const Form = ({data,setdata})=>{
    const info= {
        name:"",
        lastname:"",
        email:"",
        password:"",
        passwordc:"",
    }

    const[state,setState]=useState(info)
    const[errors,setErrors]=useState(info)

    const nstate=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }

    const create = (e)=>{
        e.preventDefault();
        const errorsc={...errors}
        state.name.length<4?(errorsc.name="The element should've at least 4 characters"):(errorsc.name="");
        state.lastname.length<4?(errorsc.lastname="The element should've at least 4 characters"):(errorsc.lastname="");
        state.password!=state.passwordc ?(errorsc.passwordc ="The password is not the same"):(errorsc.passwordc="");
        state.email.length<10|| !state.email.includes('@') ?(errorsc.email="The email should've at least 10  characters and an @"):(errorsc.email="");
        const specialCharactersRegex = /[!@#$%^&*()\-_=+\[\]{};:'"\\|,.<>\/?`~]/;
        const capitalLettersRegex = /[A-Z]/;
        state.password.length < 12 || !specialCharactersRegex.test(state.password) || !capitalLettersRegex.test(state.password)?errorsc.password = "The password should've at least 12 characters, one special character and one character in upper letters" :errorsc.password =''
        

        if(errorsc.name ||errorsc.lastname||errorsc.email||errorsc.password||errorsc.passwordc){
            setErrors(errorsc)
            return;
        }

        setdata([...data,state])
        setState(info)
        setErrors(info)
    }
    return(
        <>
            <h3>Registro de Superhéroes</h3>
            <br/>
            <form onSubmit={(e)=>create(e)}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input className="input-group-text" type="text" id="name" name="name" value={state.name} onChange={(e)=>nstate(e)}/>
                    {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="lastname">Apellido:</label>
                    <input className="input-group-text" type="text" id="lastname" name="lastname"value={state.lastname} onChange={(e)=>nstate(e)}/>
                    {errors.lastname && <p style={{color:"red"}}>{errors.lastname}</p>}
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input className="input-group-text" type="email" id="email" name="email"value={state.email} onChange={(e)=>nstate(e)}/>
                    {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input className="input-group-text" type="password" id="password" name="password"value={state.password} onChange={(e)=>nstate(e)}/>
                    {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
                </div>
                <div>
                    <label htmlFor="passwordc">Confirmar Constraseña:</label>
                    <input className="input-group-text" type="password" id="passwordc" name="passwordc"value={state.passwordc} onChange={(e)=>nstate(e)}/>
                    {errors.passwordc && <p style={{color:"red"}}>{errors.passwordc}</p>}
                </div>
                <br />
                <button className="btn btn-primary">Crear Contraseña</button>
            </form>
        </>
    )
}

export default Form