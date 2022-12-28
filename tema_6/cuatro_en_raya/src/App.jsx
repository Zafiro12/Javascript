import React, { Component } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MapaBotones = (props) => {
  let listaBotones = props.listaBotones;
  return (
    <div>
      {listaBotones.map((fila, x) => {
        return (
          <div key={x}>
            {
            fila.map((boton, y) => {
              if (x === 0 && boton !== "secondary") 
              {
                return (
                  <Button
                    key={y}
                    onClick={() => props.onClick(x, y)}
                    color={boton}
                  ></Button>
                );
              }
              if (x === 0) 
              {
                return (
                  <Button
                    key={y}
                    onClick={() => props.onClick(x, y)}
                    color={boton}
                    outline
                  ></Button>
                );
              }
              if (boton !== "secondary") 
              {
                return <Button key={y} color={boton}></Button>;
              } else 
              {
                return <Button key={y} color={boton} disabled outline></Button>;
              }
            })
            }
          </div>
        );
      })}
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null),
      turno: false
    };
  }

  clica(x, y) {
    console.log(x, y);

    let listaBotones = [...this.state.listaBotones];
    
    for (let i = listaBotones.length - 1; i >= 0; i--) {
      if (listaBotones[i][y] !== "primary") {
        listaBotones[i][y] = "primary";
        break;
      }
    }

    this.setState({ listaBotones: listaBotones });
  }

  componentWillMount() {
    let listaBotones = [...this.state.listaBotones];
    listaBotones = listaBotones.map((fila) => {
      return Array(9).fill("secondary");
    });
    this.setState({ listaBotones: listaBotones });
  }

  render() {
    return (
      <div className="App">
        <h1> CUATRO EN RAYA </h1>
        <MapaBotones
          listaBotones={this.state.listaBotones}
          onClick={(x, y) => this.clica(x, y)}
        />
      </div>
    );
  }
}

export default App;
