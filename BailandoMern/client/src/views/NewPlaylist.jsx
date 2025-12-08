import axios from "axios";
import { useEffect, useState } from "react";
import styles from './../css/NewPlaylist.module.css'
import { useNavigate } from "react-router-dom";

const CreatePlaylist = ({ listplaylist, setlistplaylist }) => {

    const [name, setName] = useState("");
    const [cancions, setcancions] = useState([]);
    const [selectedcan, setSelectedcan] = useState([]);

    const URLCAN = "http://localhost:8081/api/cancion";
    const URLPLAY = "http://localhost:8081/api/playlist";

    const navigate = useNavigate();

    useEffect(() => {
        axios(URLCAN).then((res) => setcancions(res.data));
    }, []);

    const [errors, seterrors] = useState({
        name: "",
        canciones: ""
    });

    const handleCheckbox = (cancion) => {
        const alreadySelected = selectedcan.some((s) => s._id === cancion._id);

        if (alreadySelected) {
            setSelectedcan(selectedcan.filter((s) => s._id !== cancion._id));
        } else {
            setSelectedcan([...selectedcan, cancion]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(URLPLAY, {
            name,
            canciones: selectedcan.map(can => can.title),
        })
        .then(response => {
            // actualiza el estado global
            setlistplaylist([...listplaylist, response.data]);

            // limpia el formulario
            setName("");
            setSelectedcan([]);

            // redirige
            navigate('/playlist');
        })
        .catch(err => {
            const errs = err.response?.data?.errors || {};

            seterrors(
                Object.fromEntries(
                    Object.entries(errs).map(([key, val]) => [key, val.message])
                )
            );
        });
    };

    return (
        <div>
            <h1>Crea una nueva playlist</h1>

            <form onSubmit={handleSubmit}>
                <label>Playlist Name:</label>
                <input 
                    type="text"
                    value={name}
                    name="name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

                <br />

                <h2>Elige las canciones</h2>
                <div style={{ textAlign: "left", marginLeft: "40%" }}>
                    {cancions.map((cancion) => (
                        <div key={cancion._id} className={styles.checkboxItem}>
                            <input
                                type="checkbox"
                                checked={selectedcan.some((s) => s._id === cancion._id)}
                                onChange={() => handleCheckbox(cancion)}
                            />
                            <span className={styles.checkboxLabel}>
                                {cancion.title}
                            </span>
                        </div>
                    ))}
                </div>

                <br />

                <button className="btn btn-info" type="submit">Crear Playlist</button>
            </form>
        </div>
    );
};

export default CreatePlaylist;
