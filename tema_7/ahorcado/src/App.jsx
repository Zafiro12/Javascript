import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from "react";
import {PALABRAS} from "./palabras.js";
import Guia from "./Guia.jsx";

function nuevaPalabra() {
    return PALABRAS[Math.floor(Math.random() * PALABRAS.length)].toLowerCase()
}

function App() {
    const [errores, setErrores] = useState(0)
    const [letras, setLetras] = useState([])
    const [palabra, setPalabra] = useState(nuevaPalabra())
    const [palabraPrevia, setPalabraPrevia] = useState("")
    const [ganar, setGanar] = useState(false)
    const [perder, setPerder] = useState(false)

    useEffect(() => {
        if (palabra.split("").every((letra) => letras.includes(letra))) {
            setGanar(true)
            setPalabraPrevia(palabra)
            setPalabra(nuevaPalabra())
            setErrores(0)
            setLetras([])
        }
        if (errores === 6) {
            setPerder(true)
            setPalabraPrevia(palabra)
            setPalabra(nuevaPalabra())
            setErrores(0)
            setLetras([])
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [letras])

    function handleKeyDown(event) {
        if (event.key.length === 1) {
            comprobarLetra(event.key)
        }
    }

    function comprobarLetra(letra) {
        if (ganar || perder) {
            setGanar(false)
            setPerder(false)
        }
        if (letra.length === 1 && !letras.includes(letra)) {
            console.log("Comprobando letra " + letra)
            if (palabra.includes(letra)) {
                console.log("La palabra contiene la letra " + letra)
                if (!letras.includes(letra)) {
                    setLetras([...letras, letra])
                }
            } else {
                console.log("La palabra no contiene la letra " + letra)
                if (!letras.includes(letra)) {
                    setLetras([...letras, letra])
                }
                if (errores < 6) {
                    setErrores(errores + 1)
                }
            }
        } else {
            console.log("No se ha introducido ninguna letra")
        }
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Ahorcado</h1>
            <img src={"ahorcado" + errores + ".jpeg"} alt="imagen"/>
            <Guia palabra={palabra} letras={letras}/>
            <small>Pulsa una letra...</small>
            {
                letras.length > 0 && <p>Letras pulsadas: {letras.join(", ")}</p>
            }
            {
                ganar && <p>¡Has ganado! La palabra era {palabraPrevia}</p>
            }
            {
                perder && <p>¡Has perdido! La palabra era {palabraPrevia}</p>
            }
        </div>
    )
}

export default App
