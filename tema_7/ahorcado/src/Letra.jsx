import {Button, Input} from "reactstrap";
import {useEffect} from "react";

function Letra(props) {

    useEffect(() => {
        // Escuchamos el evento keydown
        document.addEventListener("keydown", function (event) {
            // Si la tecla pulsada es una letra
            if (event.key.match(/[a-z]/i)) {
                // La introducimos en el input
                props.onChange({target: {value: event.key}})
            }
        }
    }

    return <div className="d-flex">
        <Input style={{width: "3rem", marginRight: "10px"}} maxLength={1} type="text"
               onChange={props.onChange}></Input>
        <Button onClick={props.onClick}>Comprobar</Button>
    </div>;
}

export default Letra;