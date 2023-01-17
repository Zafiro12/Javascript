function Tres(props) {
    return(
        <>
            <h2>Tres</h2>
            <input type="text" value={props.valor} onChange={event => props.f(event.target.value)} />
        </>
    );
}

export default Tres;