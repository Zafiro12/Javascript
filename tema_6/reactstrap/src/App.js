import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            saludo: "SALUDA EN VARIOS IDIOMAS",
        };
    }

    traductor(valor) {
        this.setState({ saludo: valor });
    }

    render() {
        return (
            <>
                <Button color="primary" onClick={() => this.traductor("HELLO")}>Ingles</Button>
                <Button color="primary" onClick={() => this.traductor("HOLA")}>Español</Button>
                <Button color="primary" onClick={() => this.traductor("CIAO")}>Italiano</Button>
                <Button color="primary" onClick={() => this.traductor("BONJOUR")}>Frances</Button>
                {this.state.saludo}
            </>
        );

    }
}

export default App;