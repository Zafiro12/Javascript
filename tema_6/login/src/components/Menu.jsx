import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonGroup, Navbar, NavbarBrand, NavLink} from 'reactstrap';
import {useEffect, useState} from "react";
import Uno from "./Uno.jsx";
import Dos from "./Dos.jsx";
import Tres from "./Tres.jsx";

function Menu() {
    const [n, setN] = useState(1);
    const [valor, setValor] = useState("");
    const [input, setInput] = useState();

    const handleClick = (number) => {
        setN(number);
    }

    useEffect(() => {
        if (n === 1) {
            setInput(<Uno valor={valor} f={(str) => {
                setValor(str)
            }}></Uno>);
        }
        if (n === 2) {
            setInput(<Dos valor={valor} f={(str) => {
                setValor(str)
            }}></Dos>);
        }
        if (n === 3) {
            setInput(<Tres valor={valor} f={(str) => {
                setValor(str)
            }}></Tres>);
        }
    }, [n, valor]);

    return (
        <div className="text-center">
            <Navbar>
                <NavbarBrand><img src="vite.svg" alt="Vite"/>Vite</NavbarBrand>
                <NavLink>
                    <ButtonGroup>
                        <Button onClick={() => handleClick(1)}>UNO</Button>
                        <Button onClick={() => handleClick(2)}>DOS</Button>
                        <Button onClick={() => handleClick(3)}>TRES</Button>
                    </ButtonGroup>
                </NavLink>
            </Navbar>
            {input}
        </div>

    );
}

export default Menu;
