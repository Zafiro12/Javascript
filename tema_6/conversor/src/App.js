import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      euros: 5,
      factor: 1.05,
    };
  }

  aumentar() {
    let e = this.state.euros;
    e++
    this.setState({ euros: e })
  }

  disminuir() {
    let e = this.state.euros;
    e--;
    if (e >= 0) this.setState({ euros: e })
  }

  render() {
    return (
      <>
        <Conversor euros={this.state.euros} factor={this.state.factor} />
        <button onClick={() => this.aumentar()}>+</button>
        <button onClick={() => this.disminuir()}>-</button>
      </>
    );
  }
}

function Conversor(props) {
  return (
    <>
    <Moneda valor={props.euros} /> Euros equivalen a <Moneda valor={props.euros * props.factor} /> dólares<br />
    </>
  );
}

function Moneda(props) {
  return (
    <>{props.valor}</>
  );
}

export default App;