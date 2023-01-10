import { Button } from "reactstrap";

function DelDeseo(props) {
    return (
        <Button color='danger' onClick={props.f} >Borrar {props.value}</Button>
    );
}

function Deseo(props) {
    return (
        <p>{props.value}</p>
    );
}

function ListaDeseos(props) {
    return (
        <div>
            <img src="vite.svg" alt="logo" height='100em' />
            <h1>Lista de Deseos</h1>
            {
                props.lista.map((element, i) => {
                    return (
                        <span key={i}>
                            <Deseo value={element} />
                            <DelDeseo f={() => props.f(i)} value={element} />
                        </span>);
                })
            }
        </div>
    );
}

export default ListaDeseos;
