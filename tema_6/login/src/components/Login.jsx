import {Button} from "reactstrap";
import {useState} from "react";

function Login(props) {
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");

    const handleClick = () => {
        props.f(usuario, clave);
    }

    return (
        <div className="text-center">
            <h1>Iniciar sesión</h1>
            <p>
                <input type="text" placeholder="Nombre de usuario" onChange={event=>setUsuario(event.target.value)} />
            </p>
            <p>
                <input type="password" placeholder="Contraseña" onChange={event=>setClave(event.target.value)} />
            </p>
            <p>
                <Button onClick={handleClick}>Iniciar sesión</Button>
            </p>
        </div>
    );
}

export default Login;
