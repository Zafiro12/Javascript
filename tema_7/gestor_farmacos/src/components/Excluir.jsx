import {Button, Input, Toast, ToastBody, ToastHeader} from "reactstrap";
import {useEffect, useState} from "react";

export default function Excluir(props) {
    const [med, setMed] = useState(props.meds);

    useEffect(() => {
        setMed(props.meds);
    }, [props.meds]);

    return (
        <div className="p-3 my-2 rounded">
            <Toast className="bg-danger">
                <ToastHeader>
                    Excluir X medicamentos
                </ToastHeader>
                <ToastBody>
                    <Input type="textarea" value={med.map((value) => {
                            return " " + value.codATC;
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
