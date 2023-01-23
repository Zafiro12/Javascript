import {Button, Card, CardText, CardTitle, Form, FormGroup, Input} from "reactstrap";
import {useState} from "react";

function Login(props) {
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");

    const handleClick = () => {
        props.f(usuario, clave);
    }

    const obj = props.correcto ? <></> : <span style={{color: "red"}}>Usuario o contraseña no válidos</span>

    return (<div style={{width: "100vw", height:"100vh"}} className="d-flex justify-content-center align-items-center">
        <Card
            body
            color="light"
            style={{width: "18rem", height: "18rem", flex: "0 18rem"}}
        >
            <CardTitle tag="h5">Iniciar sesión</CardTitle>
            {obj}
            <CardText>
                <Form>
                    <FormGroup>
                        <Input type="text" placeholder="Nombre de usuario"
                               onChange={event => setUsuario(event.target.value)}/>
                    </FormGroup>

                    <FormGroup>
                        <Input type="password" placeholder="Contraseña"
                               onChange={event => setClave(event.target.value)}/>
                    </FormGroup>
                </Form>
            </CardText>
            <Button onClick={handleClick}>Iniciar sesión</Button>
        </Card>
    </div>);
}

export default Login;
