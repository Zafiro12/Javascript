import {useEffect, useState} from "react";

function Guia(props) {
    const [palabra, setPalabra] = useState(props.palabra.split(""));
    const [letras, setLetras] = useState([]);

    useEffect(() => {
        setLetras(props.letra);
        setPalabra(props.palabra.split(""));
    }, [props.letra, props.palabra])

    return (
        <p>
            {palabra.map((letra) => {
                if (letras.includes(letra)) {
                    return letra + " ";
                } else {
                    return "_ ";
                }
            })}
        </p>
    );
}

export default Guia;