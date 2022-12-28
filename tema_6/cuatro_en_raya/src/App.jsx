import React, { Component } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MapaBotones = (props) => {
  let listaBotones = props.listaBotones;
  return (
    <div>
      {
        listaBotones.map((fila, x) => {
          return (
            <div key={x}>
              {
                fila.map((boton, y) => {
                  if (boton !== "secondary") {
                    return (
                      <Button
                        key={y}
                        onClick={() => props.onClick(x, y)}
                        color={boton}
                      >&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                    );
                  } else {
                    return (
                      <Button
                        key={y}
                        onClick={() => props.onClick(x, y)}
                        color={boton}
                        outline
                      >&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                    );
                  }
                })
              }
            </div>
          );
        })
      }
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null),
      turno: false,
      ganaAmarillo: false,
      ganaRojo: false,
    };
  }

  reset() {
    let listaBotones = [...this.state.listaBotones];
    listaBotones = listaBotones.map((fila) => {
      return Array(9).fill("secondary");
    });
    this.setState({ listaBotones: listaBotones });
    this.setState({ turno: false });
    this.setState({ ganaAmarillo: false });
    this.setState({ ganaRojo: false });
  }

  buscarGanador() {
    let listaBotones = [...this.state.listaBotones];

    // Comprobar filas
    listaBotones.forEach((fila) => {
      let contadorAmarillo = 0;
      let contadorRojo = 0;
      fila.forEach((boton) => {
        if (boton === "warning") {
          contadorAmarillo++;
          contadorRojo = 0;
        } else if (boton === "danger") {
          contadorRojo++;
          contadorAmarillo = 0;
        } else {
          contadorAmarillo = 0;
          contadorRojo = 0;
        }
        if (contadorAmarillo === 4) {
          this.setState({ ganaAmarillo: true });
          return;
        }
        if (contadorRojo === 4) {
          this.setState({ ganaRojo: true });
        }
      });
    });

    // Comprobar columnas
    for (let i = 0; i < listaBotones.length; i++) {
      let contadorAmarillo = 0;
      let contadorRojo = 0;
      for (let j = 0; j < listaBotones.length; j++) {
        if (listaBotones[j][i] === "warning") {
          contadorAmarillo++;
          contadorRojo = 0;
        } else if (listaBotones[j][i] === "danger") {
          contadorRojo++;
          contadorAmarillo = 0;
        } else {
          contadorAmarillo = 0;
          contadorRojo = 0;
        }
        if (contadorAmarillo === 4) {
          this.setState({ ganaAmarillo: true });
          return;
        }
        if (contadorRojo === 4) {
          this.setState({ ganaRojo: true });
          return;
        }
      }
    }
  }

  clica(x, y) {
    if (this.state.ganaAmarillo || this.state.ganaRojo) {
      this.reset();
      return;
    }

    let listaBotones = [...this.state.listaBotones];

    for (let i = listaBotones.length - 1; i >= 0; i--) {
      if (listaBotones[i][y] !== "danger" && listaBotones[i][y] !== "warning") {
        if (this.state.turno) {
          listaBotones[i][y] = "danger";
        } else {
          listaBotones[i][y] = "warning";
        }
        break;
      }
    }

    this.setState({ turno: !this.state.turno });
    this.setState({ listaBotones: listaBotones });

    this.buscarGanador();
  }

  componentWillMount() {
    this.reset();
  }

  render() {
    return (
      <div className="App">
        <h1> CUATRO EN RAYA </h1>
        <h2> Turno: {this.state.turno ? "Rojo" : "Amarillo"} </h2>
        <h2> {this.state.ganaAmarillo ? "Gana Amarillo" : ""} </h2>
        <h2> {this.state.ganaRojo ? "Gana Rojo" : ""} </h2>
        <MapaBotones
          listaBotones={this.state.listaBotones}
          onClick={(x, y) => this.clica(x, y)}
        />
      </div>
    );
  }
}

export default App;
