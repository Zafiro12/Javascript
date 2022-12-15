import React, { useState } from 'react'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Boton(props) {
  return (
    <Button onClick={props.onClick} style={{ margin: 2 + "px" }} color={props.color}>&nbsp;&nbsp;&nbsp;&nbsp;</Button>
  )
}

function Botones(props) {
  const cols = props.cols
  const rows = props.rows

  const colorDefault = "primary"
  const posiblesColores = ["secondary", "success", "danger", "warning", "info", "dark"]

  const [matriz, setMatriz] = useState(Array(rows).fill(Array(cols).fill(colorDefault)))

  const handleClick = (posx, posy) => {
    const nuevaMatriz = matriz.map((fila, i) => {
      return fila.map((color, j) => {
        if (i === posy && j === posx) {
          if (color !== "primary") {
            return colorDefault
          }
          if (i > 0 && matriz[i - 1][j] !== colorDefault) {
            return matriz[i - 1][j]
          }
          if (i < rows - 1 && matriz[i + 1][j] !== colorDefault) {
            return matriz[i + 1][j]
          }
          if (j > 0 && matriz[i][j - 1] !== colorDefault) {
            return matriz[i][j - 1]
          }
          if (j < cols - 1 && matriz[i][j + 1] !== colorDefault) {
            return matriz[i][j + 1]
          }

          return posiblesColores[Math.floor(Math.random() * posiblesColores.length)]
        } else {
          return color
        }
      })
    })
    setMatriz(nuevaMatriz)
  }

  return (
    <div>
      {
        matriz.map((fila, i) => {
          return (
            <div key={i}>
              {
                fila.map((color, j) => {
                  return (
                    <Boton onClick={()=>handleClick(j,i)} key={j} color={color} />
                  )
                })
              }
            </div>
          )
        }
        )
      }

    </div>
  )
}

function App() {
  return (
    <Botones cols={5} rows={5} />
  )
}

export default App
