import 'bootstrap/dist/css/bootstrap.min.css';
import Incluir from "./components/Incluir.jsx";
import Excluir from "./components/Excluir.jsx";
import { useState } from 'react';
import Ventana from "./components/Ventana.jsx";

function App() {
    const [modalIncluir, setModalIncluir] = useState(false);
    const [modalExcluir, setModalExcluir] = useState(false);
    const [incluirMeds, setIncluirMeds] = useState([]);
    const [excluirMeds, setExcluirMeds] = useState([]);

    const toggleIncluir = () => setModalIncluir(!modalIncluir);
    const toggleExcluir = () => setModalExcluir(!modalExcluir);

    const handleChangeIncluir = (meds) => {
        let newMeds = [...incluirMeds, meds];
        setIncluirMeds(newMeds);
    }
    const handleChangeExcluir = (meds) => {
        let newMeds = [...excluirMeds, meds];
        setExcluirMeds(newMeds);
    }

    const clearIncluir = () => {
        setIncluirMeds([]);
    }

    const clearExcluir = () => {
        setExcluirMeds([]);
    }

  return (
    <div className="d-flex justify-content-evenly">
        <Ventana modal={modalIncluir} f={(meds)=>handleChangeIncluir(meds)} toggle={toggleIncluir} />
        <Ventana modal={modalExcluir} f={(meds)=>handleChangeExcluir(meds)} toggle={toggleExcluir} />

        <Incluir meds={incluirMeds} f={toggleIncluir} clear={clearIncluir} />
        <Excluir meds={excluirMeds} f={toggleExcluir} clear={clearExcluir} />
    </div>
  );
}

export default App
