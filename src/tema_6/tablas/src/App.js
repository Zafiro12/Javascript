import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filas: 5,
      columnas: 5,
    };
  }
  render() {
    return (
      <Tabla filas={this.state.filas} columnas={this.state.columnas} />
    );
  }
}

function Tabla(props) {
  return (
    <table>
      <tbody>
        <Filas filas={props.filas} columnas={props.columnas} />
      </tbody>
    </table>
  );
}

function Filas(props) {
  let filas = [];
  for (let i = 0; i < props.filas; i++) {
    filas.push(<Columnas key={i} columnas={props.columnas} />);
  }
  return filas;
}

function Columnas(props) {
  let columnas = [];
  for (let i = 0; i < props.columnas; i++) {
    columnas.push(<td key={i}><button>A</button></td>);
  }
  return <tr>{columnas}</tr>;
}

export default App;
