import Menu from "./components/Menu.jsx";
import Login from "./components/Login.jsx";
import {useState} from "react";
import axios from "axios";
import md5 from "md5"
import {PHPLOGIN} from "./data.js";

function App() {
    const [activa, setActiva] = useState(false);
    const [correcto, setCorrecto] = useState(true);
    const [error, setError] = useState(false);

    function comprobar(usuario, clave) {
        axios.post(PHPLOGIN, JSON.stringify({usuario: usuario, clave: md5(clave)})).then(r => {
            if (r.data.mensaje === "aprobado") {
                setActiva(true);
                setCorrecto(true);
                setError(false);
            }
            if (r.data.mensaje === "denegado") {
                setCorrecto(false);
                setError(false);
            }
            else {
                setError(true)
            }
        });
    }

    const obj = activa ? <Menu/> : <Login error={error} correcto={correcto} f={comprobar}/>
    return (<>
            {obj}
        </>)
}

export default App
