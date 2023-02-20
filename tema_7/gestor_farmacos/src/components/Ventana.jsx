import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {FARMACOS} from "../assets/datos.js";
import {useState} from "react";

export default function Ventana(props) {
    const [filtro, setFiltro] = useState("");
    const [med, setMed] = useState("");

    const handleClick = () => {
      props.f(med);
        props.toggle();
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
            <ModalBody>
                <div className="d-flex align-items-center">
                    <Label for="filtro">Filtrar:</Label>
                    <span>&nbsp;</span>
                    <Input id="filtro" type="text" onChange={(event) => setFiltro(event.target.value)}></Input>
                </div>
                <hr/>
                <Input type="select" onChange={event => setMed(event.target.value)}>
                    {
                        FARMACOS.map((value) => {
                            if (value.descATC.toLowerCase().includes(filtro.toLowerCase())) {
                                return <option key={value.codATC}
                                               value={value.codATC}>{value.codATC + " " + value.descATC}</option>;
                            }
                        })
                    }
                </Input>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleClick}>
                    Add
                </Button>
            </ModalFooter>
        </Modal>
    );
}
