import {Button} from "reactstrap";
import {useState} from "react";

function Uno(props) {
    const [valor, setValor] = useState("");

    return (
        <>
            <h2>Uno</h2>
            <input type="text" onChange={event => setValor(event.target.value)}/>
            <Button color="primary" onClick={() => props.f(valor)}>Add</Button>
        </>
    );
}

export default Uno;