import 'bootstrap/dist/css/bootstrap.min.css';
import Incluir from "./components/Incluir.jsx";
import Excluir from "./components/Excluir.jsx";
import {useState} from 'react';
import Ventana from "./components/Ventana.jsx";
import {FARMACOS} from "./assets/datos.js";

function App() {
    const [farmacos, setFarmacos] = useState(FARMACOS);
    const [modalIncluir, setModalIncluir] = useState(false);
    const [modalExcluir, setModalExcluir] = useState(false);
    const [incluirMeds, setIncluirMeds] = useState([]);
    const [excluirMeds, setExcluirMeds] = useState([]);

    const toggleIncluir = () => setModalIncluir(!modalIncluir);
    const toggleExcluir = () => setModalExcluir(!modalExcluir);

    const handleChangeIncluir = (meds) => {
        let newMeds = [...incluirMeds, meds];
        let newFarmacos = farmacos.filter(farmaco => farmaco.codATC !== meds.codATC);

        setFarmacos(newFarmacos);
        setIncluirMeds(newMeds);
    }
    const handleChangeExcluir = (meds) => {
        let newMeds = [...excluirMeds, meds];
        let newFarmacos = farmacos.filter(farmaco => farmaco.codATC !== meds.codATC);

        setFarmacos(newFarmacos);
        setExcluirMeds(newMeds);
    }

    const clearIncluir = () => {
        let newFarmacos = [...farmacos, ...incluirMeds];
        setIncluirMeds([]);
        setFarmacos(newFarmacos);
    }

    const clearExcluir = () => {
        let newFarmacos = [...farmacos, ...excluirMeds];
        setFarmacos(newFarmacos);
        setExcluirMeds([]);
    }

    return (
        <div className="d-flex justify-content-evenly">
            <Ventana farmacos={farmacos} modal={modalIncluir} f={(meds) => handleChangeIncluir(meds)}
                     toggle={toggleIncluir}/>
            <Ventana farmacos={farmacos} modal={modalExcluir} f={(meds) => handleChangeExcluir(meds)}
                     toggle={toggleExcluir}/>

            <Incluir meds={incluirMeds} f={toggleIncluir} clear={clearIncluir}/>
            <Excluir meds={excluirMeds} f={toggleExcluir} clear={clearExcluir}/>
        </div>
    );
}

export default App
