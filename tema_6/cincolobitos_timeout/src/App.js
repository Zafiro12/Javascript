import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function Botones() {
  const [numero, setNumero] = useState([0, 0, 0, 0, 0]);
  const [color, setColor] = useState(['secondary', 'secondary', 'secondary', 'secondary', 'secondary']);
  const [mayor, setMayor] = useState(1);

  const aumentar = (n) => {
    const nuevoNumero = [...numero];
    nuevoNumero[n] = nuevoNumero[n] + 1;
    setNumero(nuevoNumero);
    console.log(nuevoNumero);

    let mayorN = mayor;
    for (let i = 0; i < nuevoNumero.length; i++) {
      if (nuevoNumero[i] > mayorN) {
        mayorN = nuevoNumero[i];
      }
    }
    setMayor(mayorN);
    console.log(mayorN);

    const nuevoColor = [...color];

    for (let i = 0; i < nuevoNumero.length; i++) {
      if (nuevoNumero[i] >= mayorN) {
        nuevoColor[i] = 'primary';
      } else {
        nuevoColor[i] = 'secondary';
      }
    }
    setColor(nuevoColor);
    console.log(color);
  };

  const disminuir = (n) => {
      const nuevoNumero = [...numero];
      if (nuevoNumero[n] > 0) {
        nuevoNumero[n] = nuevoNumero[n] - 1;
      }
      setNumero(nuevoNumero);
      console.log(nuevoNumero);

      let mayorN = mayor;
      for (let i = 0; i < nuevoNumero.length; i++) {
        if (nuevoNumero[i] > mayorN) {
          mayorN = nuevoNumero[i];
        }
      }
      setMayor(mayorN);
      console.log(mayorN);

      const nuevoColor = [...color];

      for (let i = 0; i < nuevoNumero.length; i++) {
        if (nuevoNumero[i] >= mayorN) {
          nuevoColor[i] = 'primary';
        } else {
          nuevoColor[i] = 'secondary';
        }
      }
      setColor(nuevoColor);
      console.log(color);
  };

  return (
    <div>
      <Button color={color[0]} onClick={() => { 
        aumentar(0);
          
        setTimeout(() => {
          disminuir(0);
        }, 3000);

        }}> {numero[0]} 
      </Button>
      <Button color={color[1]} onClick={() => aumentar(1)}> {numero[1]} </Button>
      <Button color={color[2]} onClick={() => aumentar(2)}> {numero[2]} </Button>
      <Button color={color[3]} onClick={() => aumentar(3)}> {numero[3]} </Button>
      <Button color={color[4]} onClick={() => aumentar(4)}> {numero[4]} </Button>
    </div>
  );
}

function App() {


  return (
    <>
      <Botones />
    </>
  );
}

export default App;
