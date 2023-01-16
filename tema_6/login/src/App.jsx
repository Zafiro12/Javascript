import Menu from "./components/Menu";
import Login from "./components/Login";
import {useEffect, useState} from "react";
import axios from "axios";
import md5 from "md5"
import {PHPCONN} from "./data.js";

function App() {
    const [activa, setActiva] = useState(false);

    function comprobar(usuario, clave) {
        axios.post(PHPCONN, JSON.stringify({usuario: usuario, clave: md5(clave)})).then(r => {
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
