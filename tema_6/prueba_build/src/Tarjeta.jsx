import 'bootstrap/dist/css/bootstrap.min.css'
import './Tarjeta.css'

function Imagen(props) {
  const src = props.src;
  const alt = src.split('/').pop().split('.').shift();
  const altura = "300px"
  const ancho = "300px"

  return (
    <img src={src} alt={alt} height={altura} width={ancho} />
  );
}

function Titulo(props) {
  return (
    <h2>{props.texto}</h2>
  );
}

function Parrafo(props) {
  return (
    <p>{props.texto}</p>
  );
}

function Tarjeta(props) {
  return (
    <div className="contenedor">
      <Imagen src={props.src} />
      <Titulo texto={props.titulo} />
      <Parrafo texto={props.parrafo} />
    </div>
  );
}

export default Tarjeta
