import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Button } from 'reactstrap';
import { useState } from 'react';


function Input(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleClick = () => {
        props.f(name, email);
    }

    return (
        <div>
            <input placeholder='nombre' type='text' id='name' name='name' onChange={event => setName(event.target.value)} />
            <input placeholder='email' type='email' id='email' name='email' onChange={event => setEmail(event.target.value)} />
            <Button color='primary' onClick={handleClick}>Guardar</Button>
        </div>
    );
}

function Display(props) {
    return (
        <div>
            {
                props.users.map((user, i) => {
                    return (
                        <p key={i}>
                            <span>{user.name} - {user.email}</span>
                            <Button color='danger' onClick={() => props.f(user.id)} >Borrar</Button>
                        </p>
                    )
                })
            }
        </div>

    );
}

function App() {
    const [users, setUsers] = useState([]);

    const addUser = (name, email) => {
        let l = [...users];
        let id = l.length > 0 ? Math.max(...l.map(o => o.id)) + 1 : 1;

        let obj = { id: id, name: name, email: email };

        l.push(obj);
        console.log("Insertado: " + id);

        setUsers(l);
    }

    const delUser = (id) => {
        let l = [...users];

        l = l.filter(o => o.id !== id);
        console.log("Borrado: " + id);

        setUsers(l);
    }

    return (
        <div className='App'>
            <h1>Añadir usuarios</h1>
            <Display users={users} f={delUser} />
            <Input f={addUser} />
        </div>
    );
}

export default App;
