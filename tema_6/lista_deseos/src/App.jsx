import 'bootstrap/dist/css/bootstrap.min.css';
import ListaDeseos from "./components/ListaDeseos";
import AddDeseo from "./components/AddDeseo";
import { useState } from "react";

function App()
{
    const [lista, setLista] = useState([]);

    const handleEnter = (value) => {
        let nuevaLista = [...lista];

        nuevaLista.push(value);

        setLista(nuevaLista);
    }

    const handleClick = (i) => {
        let nuevaLista = [...lista];

        nuevaLista.splice(i , 1);

        setLista(nuevaLista);
    }

    return(
        <div className='text-center'>
            <ListaDeseos lista={lista} f={handleClick} />
            <AddDeseo f={handleEnter} />
        </div>
    );
}

export default App;
