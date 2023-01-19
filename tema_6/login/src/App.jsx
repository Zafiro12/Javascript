import Menu from "./components/Menu.jsx";
import Login from "./components/Login.jsx";
import {useState} from "react";
import axios from "axios";
import md5 from "md5"
import {PHPLOGIN} from "./data.js";

function App() {
    const [activa, setActiva] = useState(false);

    function comprobar(usuario, clave) {
        axios.post(PHPLOGIN, JSON.stringify({usuario: usuario, clave: md5(clave)})).then(r => {
            if (r.data.mensaje === "aprobado") {
                setActiva(true);
            }
        });
    }

    const obj = activa ? <Menu /> : <Login f={comprobar}/>
    return (
        <>
            {obj}
        </>
    )
}

export default App
