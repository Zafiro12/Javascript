import { useState } from 'react';
import './App.css';

function Botones() {
  const [numero, setNumero] = useState([0, 0, 0, 0, 0]);
  const [color, setColor] = useState(['gris', 'gris', 'gris', 'gris', 'gris']);
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
        nuevoColor[i] = 'rojo';
      } else {
        nuevoColor[i] = 'gris';
      }
    }
    setColor(nuevoColor);
    console.log(color);
  };

  return (
    <div>
      <button className={color[0]} onClick={() => aumentar(0)}> {numero[0]} </button>
      <button className={color[1]} onClick={() => aumentar(1)}> {numero[1]} </button>
      <button className={color[2]} onClick={() => aumentar(2)}> {numero[2]} </button>
      <button className={color[3]} onClick={() => aumentar(3)}> {numero[3]} </button>
      <button className={color[4]} onClick={() => aumentar(4)}> {numero[4]} </button>
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
