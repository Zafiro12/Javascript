import React, {Component, useState} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Altas = (props) => {
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [telefono, setTelefono] = useState("");

    function alta() {
        props.alta(nombre, apellidos, telefono)
    }

    return (
        <Form>
            <FormGroup>
                <Label for="Nombre">Nombre:</Label>
                <Input
                    name="nombre" id="nombre" placeholder="introduzca nombre"
                    onChange={event => setNombre(event.target.value)}/>
                <Label for="Nombre">Apellidos:</Label>
                <Input
                    name="apellidos" id="apellidos"
                    placeholder="introduzca apellidos" onChange={event => setApellidos(event.target.value)}/>
                <Label for="Nombre">Telefono:</Label>
                <Input
                    name="telefono" id="telefono" type="number" placeholder="introduzca telefono"
                    onChange={event => setTelefono(event.target.value)}/>
            </FormGroup>
            <Button onClick={alta}>Añadir</Button>
        </Form>
    );
}

const Mostrar = (props) => {
    function eliminar(t) {
        props.eliminar(t)
    }

    return (
        <ul>
            {
                props.usuarios.map((n, i) => {
                    return <li key={i}>{n.nombre} {n.apellidos} {n.telefono} <Button
                        onClick={() => eliminar(n.telefono)}>X</Button></li>
                })
            }
        </ul>
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [{nombre: "Alejandro", apellidos: "Santaella", telefono: "111222333"}]
        };
    }

    alta(nombre, apellidos, telefono) {
        let n = [...this.state.usuarios]

        if (nombre !== "" && apellidos !== "" && telefono !== "") {
            if (n.filter((value) => {
                return value.telefono === telefono
            }).length === 0) {
                n.push({nombre: nombre, apellidos: apellidos, telefono: telefono});
            }
        }

        this.setState({usuarios: n});
    }

    eliminar(telefono) {
        let n = [...this.state.usuarios]

        n = n.filter((value, index) => {
            return value.telefono !== telefono;
        })

        this.setState({usuarios: n});
    }

    render() {
        return (
            <div className="App">
                <Mostrar usuarios={this.state.usuarios} eliminar={(t) => this.eliminar(t)}/>
                <Altas alta={(n, a, t) => this.alta(n, a, t)}/>
            </div>
        );
    }
}

export default App;