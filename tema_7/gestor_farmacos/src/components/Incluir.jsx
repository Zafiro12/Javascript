import {Button, Input, Toast, ToastBody, ToastHeader} from "reactstrap";
import {useEffect, useState} from "react";

export default function Incluir(props) {
    const [med, setMed] = useState([]);

    useEffect(() => {
        setMed(props.meds);
    }, [props.meds]);

    return (
        <div className="p-3 m-2 rounded">
            <Toast className="bg-info">
                <ToastHeader>
                    Incluir X medicamentos
                </ToastHeader>
                <ToastBody>
                    <Input type="textarea" value={med.map((value) => {
                            return value + " ";
                        }
                    )} disabled></Input>
                    <br/>
                    <Button color="primary" onClick={props.f}>Add</Button>
                    <span>&nbsp;</span>
                    <Button color="primary" onClick={props.clear}>Clear</Button>
                </ToastBody>
            </Toast>
        </div>
    );
}
