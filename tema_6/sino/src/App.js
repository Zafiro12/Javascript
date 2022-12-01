import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardTitle, Button, CardBody, CardSubtitle, CardText } from 'reactstrap';
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
      <Sino />
    </div>
  );
}

export default App;
