function Input() {
	return (
		<>
			<input type="text" />
		</>
	);
}

function Boton() {
	return (
		<>
			<button>Enviar</button>
		</>
	);
}

function App() {
	return (
		<div>
			Nombre:
			<Input />
			<Boton />
		</div>
	);
}

export default App;
