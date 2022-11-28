function Texto(props) {
	return (
		<>
			<p>{props.texto}</p>
		</>
	);
}

function Input(props) {
	return (
		<>
			<input type="text" placeholder={props.placeholder} /><br />
		</>
	);
}

function Boton(props) {
	return (
		<>
			<button>{props.nombre}</button>
		</>
	);
}

function App() {
	return (
		<>
			<Texto texto="Nombre" />
			<Input placeholder="Nombre" />
			<Boton nombre="Dale" />
		</>
	);
}

export default App;
