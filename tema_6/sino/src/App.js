import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, CardTitle, Button, CardBody} from 'reactstrap';
const Sino = (props) => {
  return (
    <>
      <Card
        style={{
          width: '18rem'
        }}
      >
        <img
          alt="Sample"
          src={props.imagen}
        />
        <CardBody>
          <CardTitle tag="h5">
            {props.titulo}
          </CardTitle>
          <Button>SI</Button>&nbsp;
          <Button>NO</Button>
        </CardBody>
      </Card>

    </>
  );
}

function App() {
  return (
    <div className="App">
      <Sino titulo="HOLA" imagen="https://upload.wikimedia.org/wikipedia/commons/3/3d/Simbolo_Si_Revocatoria_Lima_2013.png" />
    </div>
  );
}

export default App;
