import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonGroup, Navbar, NavbarBrand, NavLink} from 'reactstrap';

function Menu() {
    return (
        <Navbar>
            <NavbarBrand><img src="vite.svg" alt="Vite"/>Vite</NavbarBrand>
            <NavLink>
                <ButtonGroup>
                    <Button>UNO</Button>
                    <Button>DOS</Button>
                    <Button>TRES</Button>
                </ButtonGroup>
            </NavLink>
        </Navbar>
    );
}

export default Menu;
