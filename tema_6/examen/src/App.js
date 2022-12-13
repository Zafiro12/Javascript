import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'


function App() {
	const [cuantos, setCuantos] = useState(15);
	const [colores, setColores] = useState(Array(cuantos).fill('secondary'))
	const [ultimo, setUltimo] = useState(-1);


	const pulsar = (i) => {
		let nuevosColores = [...colores];
		nuevosColores.fill('secondary');
		if (ultimo!==-1) {
			nuevosColores[ultimo] = 'danger';
		}
		
		nuevosColores[i] = 'danger';
		setColores(nuevosColores);

		setUltimo(i);

		console.log("El ultimo es el boton nº" + ultimo);
	}

	return (
		<>
			{
				colores.map((color, i) => {
					return (
						<Button key={i} color={color} onClick={() => pulsar(i)}>{i}</Button>
					)
				}
				)
			}
		</>
	);
}

export default App