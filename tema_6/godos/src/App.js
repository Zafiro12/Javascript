import React from "react";
import GODOS from "./components/Godos";
import DisplayGodos from "./components/DisplayGodos";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      godos: GODOS,
    };
  }

  render() {
    return (
      <>
        <h1>Godos:</h1>
        <DisplayGodos godos={this.state.godos} />
      </>
    );
  }
}

export default App;
