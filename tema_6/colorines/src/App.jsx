import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Spinner } from 'reactstrap'

function Pulso(props) {
  return (
    <Spinner type='grow' color={props.color} />
  )
}

function Botones(props) {
  const coloresDefault = [{ nombre: 'Azul', color: 'primary' }, { nombre: 'Rojo', color: 'danger' }, { nombre: 'Verde', color: 'success' }, { nombre: 'Amarillo', color: 'warning' }]

  const colores = props.colores || coloresDefault
  const [color, setColor] = useState('primary')

  const handleClick = (c) => {
    setColor(c)
    console.log(c)
  }

  return (
    <>
      {colores.map((color, i) => <Button onClick={() => handleClick(color.color)} key={i} color={color.color} outline>{color.nombre}</Button>)}
      <br />
      <Pulso color={color} />
    </>
  )
}

function App() {
  const colores = [{ nombre: 'Azul', color: 'primary' }, { nombre: 'Rojo', color: 'danger' }, { nombre: 'Verde', color: 'success' }, { nombre: 'Amarillo', color: 'warning' }, { nombre: 'Gris', color: 'secondary' }, { nombre: 'Negro', color: 'dark' }]
  return (
    <>
      <Botones colores={colores} />
    </>
  )
}

export default App
