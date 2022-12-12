import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


function Boton(props) {
  const { click, color, valor } = props;
  return (
    <Button color={color} onClick={click}>{valor}</Button>
  );
}

function Botones() {
  const [contador, setContador] = useState([0, 0, 0, 0, 0]);
  const [mayor, setMayor] = useState(0);
  const [color, setColor] = useState(['primary', 'primary', 'primary', 'primary', 'primary']);

  useEffect(() => {
    Math.max(...contador) === 0 ? setMayor(0) : setMayor(Math.max(...contador));

    const timeout = setTimeout(() => {
      const nuevoContador = [...contador];
      const nuevoColor = [...color];
      nuevoContador.forEach((valor, i) => {
        if (valor > 0) {
          nuevoContador[i] -= 1;
        }
      });
      setContador(nuevoContador);


      contador.forEach((valor, i) => {
        if (valor === mayor) {
          nuevoColor[i] = 'success';
        } else {
          nuevoColor[i] = 'primary';
        }

        if (valor === 0) {
          nuevoColor[i] = 'primary';
        }
      });
      setColor(nuevoColor);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [contador, mayor, color]);


  const aumentar = (i) => {
    const nuevoContador = [...contador];
    nuevoContador[i] += 1;
    setContador(nuevoContador);

    let mayorN = mayor;
    for (let i = 0; i < nuevoContador.length; i++) {
      if (nuevoContador[i] > mayorN) {
        mayorN = nuevoContador[i];
      }
    }
    setMayor(mayorN);

    const nuevoColor = [...color];

    for (let i = 0; i < nuevoContador.length; i++) {
      if (nuevoContador[i] >= mayorN) {
        nuevoColor[i] = 'success';
      } else {
        nuevoColor[i] = 'primary';
      }

      if (nuevoContador[i] === 0) {
        nuevoColor[i] = 'primary';
      }
    }
    setColor(nuevoColor);
  };




  return (
    <>
      <Boton click={() => aumentar(0)} color={color[0]} valor={contador[0]} />
      <Boton click={() => aumentar(1)} color={color[1]} valor={contador[1]} />
      <Boton click={() => aumentar(2)} color={color[2]} valor={contador[2]} />
      <Boton click={() => aumentar(3)} color={color[3]} valor={contador[3]} />
      <Boton click={() => aumentar(4)} color={color[4]} valor={contador[4]} />
    </>
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
