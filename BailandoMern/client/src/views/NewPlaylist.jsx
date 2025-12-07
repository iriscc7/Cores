    import axios from "axios";
    import { useEffect, useState } from "react";
    import styles from './../css/NewPlaylist.module.css'
    import { useNavigate } from "react-router-dom";

    const CreatePlaylist = () => {
    const [name, setName] = useState("");
    const [cancions, setcancions] = useState([]);
    const [selectedcan, setSelectedcan] = useState([]);

    const URLCAN = "http://localhost:8081/api/cancion";
    const URLPLAY = "http://localhost:8081/api/playlist";

    const navigate = useNavigate()

    useEffect(() => {
        axios(URLCAN).then
        ((res) => setcancions(res.data));
    }, []);

    const handleCheckbox = (cancion) => {
        const alreadySelected = selectedcan.find((s) => s._id === cancion._id);

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
        .then( response => {
            setName("");
            setSelectedcan([]);
            navigate('/playlist')
        })
        .catch((error) => console.log(error));
    };


    return (
        <div>
        <h1>Create New Playlist</h1>

        <form onSubmit={handleSubmit}>
            <label>Playlist Name:</label>
            <input type="text"value={name} onChange={(e) => setName(e.target.value)}/>
            <h2>Choose songs</h2>
            <div style={{ textAlign: "left", marginLeft: "40%" }}>
            {cancions.map((cancion) => (
    <div key={cancion._id} className={styles.checkboxItem}>
    <input
        type="checkbox"
        checked={selectedcan.some((s) => s._id === cancion._id)}
        onChange={() => handleCheckbox(cancion)}
    />
    <span className={styles.checkboxLabel}>{cancion.title}</span>
    </div>

            ))}
            </div>
            <br />
            <button className="btn btn-info" type="submit">
            Create Playlist
            </button>
        </form>

        </div>
    );
    };

    export default CreatePlaylist;
