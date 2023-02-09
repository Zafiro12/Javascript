function Guia(props) {

    return (
        <p>
            {props.palabra.split("").map((letra) => {
                if (props.letras.includes(letra)) {
                    return letra + " ";
                } else {
                    return "_ ";
                }
            })}
        </p>
    );
}

export default Guia;