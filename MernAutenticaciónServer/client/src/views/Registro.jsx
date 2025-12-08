import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Registro = ({ setregistro }) => {

    const [state, setstate] = useState({
        firtsName: "",
        lastName: "",
        email: "",
        password: "",
        passwordconfir: ""
    });

    const [errors, seterrors] = useState({});

    const navigate = useNavigate();

    const updatestate = (e) => {
        setstate({...state,[e.target.name]: e.target.value});
    };

    const registerProcess = (e) => {
        e.preventDefault();

        const URL = "http://localhost:8083/api/users/new";

        axios.post(URL, state)
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                setregistro(true);
                seterrors({});
                navigate("/canciones");
            })
            .catch(e=>seterrors(e.response.data.errors));
    };

    return (
        <>
            <form onSubmit={registerProcess}>

                <div>
                    <label htmlFor="firtsName">Nombre</label>
                    <input type="text"name="firtsName" id="firtsName"value={state.firtsName} onChange={updatestate}/>
                    {errors.firtsName && <p style={{ color: "red" }}>{errors.firtsName}</p>}
                </div>

                <div>
                    <label htmlFor="lastName">Apellido</label>
                    <input type="text"name="lastName"id="lastName"value={state.lastName}onChange={updatestate}/>
                    {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"name="email"id="email"value={state.email}onChange={updatestate}/>
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"name="password"id="password"value={state.password}onChange={updatestate}/>
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </div>

                <div>
                    <label htmlFor="passwordconfir">Confirm Password</label>
                    <input type="password"name="passwordconfir"id="passwordconfir"value={state.passwordconfir}onChange={updatestate}/>
                    {errors.passwordconfir && <p style={{ color: "red" }}>{errors.passwordconfir}</p>}
                </div>
                <br />
                <button className="btn btn-info">Registrarse</button>
            </form>
        </>
    );
};

export default Registro;
