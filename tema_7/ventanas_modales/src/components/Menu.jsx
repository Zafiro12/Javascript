import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonGroup, Navbar, NavbarBrand, NavLink} from 'reactstrap';
import {useEffect, useState} from "react";
import Uno from "./menu/Uno.jsx";
import Dos from "./menu/Dos.jsx";
import Tres from "./menu/Tres.jsx";

function Menu() {
    const [ventana, setVentana] = useState(0);
    const [valor, setValor] = useState("Titulo");
    const [input, setInput] = useState(<></>);

    const handleClick = (number) => {
        setVentana(number);
    }

    useEffect(() => {
        if (ventana === 1) {
            setInput(<Uno f={(str) => {
                setValor(str)
            }}></Uno>);
        }
        if (ventana === 2) {
            setInput(<Dos f={(str) => {
                setValor(str)
            }}></Dos>);
        }
        if (ventana === 3) {
            setInput(<Tres f={(str) => {
                setValor(str)
            }}></Tres>);
        }
    }, [ventana, valor]);

    return (<div className="text-center">
            <Navbar>
                <NavbarBrand><img src="vite.svg" alt="Vite"/>Vite</NavbarBrand>
                <NavLink>
                    <ButtonGroup>
                        <Button color={ventana === 1 ? "primary" : "secondary"} onClick={() => handleClick(1)}>UNO</Button>
                        <Button color={ventana === 2 ? "primary" : "secondary"} onClick={() => handleClick(2)}>DOS</Button>
                        <Button color={ventana === 3 ? "primary" : "secondary"} onClick={() => handleClick(3)}>TRES</Button>
                    </ButtonGroup>
                </NavLink>
            </Navbar>
            {input}
        </div>

    );
}

export default Menu;
