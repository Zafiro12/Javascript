import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


function App() {
    const [idioma, setIdioma] = useState("HOLA EN VARIOS IDIOMAS");


    return (
        <>
            <Button color="primary" onClick={() => setIdioma("HELLO")}>Ingles</Button>
            <Button color="primary" onClick={() => setIdioma("HOLA")}>Español</Button>
            <Button color="primary" onClick={() => setIdioma("CIAO")}>Italiano</Button>
            <Button color="primary" onClick={() => setIdioma("BONJOUR")}>Frances</Button>
            {idioma}
        </>
    );
}

export default App;