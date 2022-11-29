function DisplayGodos(props) {
    return (
      <ul>
        {props.godos.map((godo) => (
          <li key={godo.id}>
            <h2>{godo.nombre}</h2>
            <p>{godo.texto}</p>
          </li>
        ))}
      </ul>
    );
  }

export default DisplayGodos;