import {Button, Card, CardText, CardTitle, Form, FormGroup, Input} from "reactstrap";
import {useState} from "react";

function Login(props) {
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");

    const handleClick = () => {
        props.f(usuario, clave);
    }

    const correcto = props.correcto ? <></> : <span style={{color: "red"}}>Usuario o contraseña no válidos</span>
    const error = !props.error ? <></> : <span style={{color: "red"}}>Ha ocurrido un error</span>

    return (<div style={{width: "100vw", height:"100vh"}} className="d-flex justify-content-center align-items-center">
        <Card
            body
            color="light"
            style={{width: "18rem", flex: "0 18rem"}}
        >
            <CardTitle tag="h5">Iniciar sesión</CardTitle>
            {correcto}
            {error}
            <CardText>
                <Form>
                    <FormGroup>
                        <Input type="text" placeholder="Nombre de usuario" disabled={props.error}
                               onChange={event => setUsuario(event.target.value)}/>
                    </FormGroup>

                    <FormGroup>
                        <Input type="password" placeholder="Contraseña" disabled={props.error}
                               onChange={event => setClave(event.target.value)}/>
                    </FormGroup>
                </Form>
            </CardText>
            <Button onClick={handleClick} disabled={props.error}>Iniciar sesión</Button>
        </Card>
    </div>);
}

export default Login;
