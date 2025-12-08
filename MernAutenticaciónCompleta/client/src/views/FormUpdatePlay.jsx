import axios from "axios";
import { useEffect, useState } from "react";
import styles from './../css/NewPlaylist.module.css';
import { useNavigate, useParams } from "react-router-dom";

const FormUpdatePlay = ({ listplaylist, setlistplaylist }) => {

    const { id } = useParams();

    const [name, setName] = useState("");
    const [cancions, setCancions] = useState([]);
    const [selectedcan, setSelectedcan] = useState([]);
    const [errors, setErrors] = useState({
        name: "",
        canciones: ""
    });

    const URLCAN = "http://localhost:8083/api/cancion";
    const URLPLAY = "http://localhost:8083/api/playlist";

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resSongs = await axios(URLCAN);
                setCancions(resSongs.data);

                const resPlaylist = await axios(`${URLPLAY}/${id}`);
                const playlist = resPlaylist.data;

                setName(playlist.name);

                const selectedObjects = resSongs.data.filter(song =>
                    playlist.canciones.some(pc => pc._id === song._id)
                );

                setSelectedcan(selectedObjects);

            } catch (e) {
                console.log("Error loading data", e);
            }
        };

        fetchData();
    }, [id]);

    const handleCheckbox = (cancion) => {
        const exists = selectedcan.some(s => s._id === cancion._id);

        if (exists) {
            setSelectedcan(selectedcan.filter(s => s._id !== cancion._id));
        } else {
            setSelectedcan([...selectedcan, cancion]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`${URLPLAY}/${id}`, {
            name,
            canciones: selectedcan.map(c => c.title)
        })
        .then(response => {

            const updated = listplaylist.map(p =>
                p._id === id ? response.data : p
            );

            setlistplaylist(updated);

            navigate('/playlist');
        })
        .catch(err => {
            const errs = err.response?.data?.errors || {};

            setErrors(
                Object.fromEntries(
                    Object.entries(errs).map(([key, val]) => [key, val.message])
                )
            );
        });
    };

    return (
        <div>
            <h1>Actualizar Playlist</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre de la Playlist:</label>
                <input
                    type="text"
                    value={name}
                    name="name"
                    id="name"
                    onChange={(e) => {
                        setName(e.target.value);
                        setErrors(prev => ({ ...prev, name: "" }));
                    }}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

                <br />

                <h2>Canciones</h2>

                <div style={{ textAlign: "left", marginLeft: "40%" }}>
                    {cancions.map(cancion => (
                        <div key={cancion._id} className={styles.checkboxItem}>
                            <input
                                type="checkbox"
                                checked={selectedcan.some(s => s._id === cancion._id)}
                                onChange={() => handleCheckbox(cancion)}
                            />
                            <span className={styles.checkboxLabel}>
                                {cancion.title}
                            </span>
                        </div>
                    ))}
                </div>

                <br />

                <button className="btn btn-info" type="submit">Actualizar Playlist</button>
            </form>
        </div>
    );
};

export default FormUpdatePlay;
