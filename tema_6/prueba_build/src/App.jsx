import Tarjeta from "./Tarjeta";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App(props) {
  return (
    <div className="seccion-tarjetas">
      {
        Array(props.cantidad).fill().map((_, i) => (
            <Tarjeta key={i} titulo="Titulo" src="imagen1.jpg" parrafo="Parrafo" />
        ))
      }
    </div>
  );
}

export default App;