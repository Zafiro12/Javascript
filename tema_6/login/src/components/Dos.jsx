function Dos(props) {
    return(
        <>
            <h2>Dos</h2>
            <input type="text" value={props.valor} onChange={event => props.f(event.target.value)} />
        </>
    );
}

export default Dos;