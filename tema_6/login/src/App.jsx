import Menu from "./components/Menu";
import {useState} from "react";

function App() {
    const [usuario, setUsario] = useState("");
    const [clave, setClave] = useState("");

    return (
        <>
            <Menu/>
        </>
    )
}

export default App
