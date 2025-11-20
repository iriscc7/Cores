import axios from "axios";
import { useEffect } from "react";

const Imagen = ({ setImagen }) => {
    const getDataGatito = () => {
        const URL = "https://api.thecatapi.com/v1/images/search";
        axios(URL).then(
            response => {
                const data = response.data;
                const imgrandom = data[0].url;  
                setImagen(imgrandom);
            }
        );
    };

    useEffect(() => {
        getDataGatito();
    }, []);

    return (
        <>
            <div>
                <br />
                <button className="btn btn-info" onClick={getDataGatito}>Ver un gatito</button>
            </div>
        </>
    );
};

export default Imagen;
