import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Button } from 'reactstrap';

function Boton(props) {
  return (
    <Button color={props.color} />
  );
}

function Botones() {
  const [color, setColor] = useState(['secondary', 'secondary', 'secondary', 'secondary', 'secondary']);
  const [posicionRojo, setPosicionRojo] = useState(0);
  const [reverso, setReverso] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setColor(color.map((color, i) => {
        if (i === posicionRojo) {
          return 'danger';
        } else {
          return 'secondary';
        }
      }));

      if (posicionRojo === color.length-2) {
        setReverso(true);
      } else if (posicionRojo === 1) {
        setReverso(false);
      }

      if (reverso) {
        setPosicionRojo(posicionRojo - 1);
        console.log(posicionRojo);
      } else {
        setPosicionRojo(posicionRojo + 1);
        console.log(posicionRojo);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [color]);

  return (
    <>
      {color.map((color, i) => (
        <Boton key={i} color={color} />
      ))}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Botones n={10} />
    </div>
  );
}

export default App
