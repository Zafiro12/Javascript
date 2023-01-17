function Uno(props) {
    return(
        <>
            <h2>Uno</h2>
            <input type="text" value={props.valor} onChange={event => props.f(event.target.value)} />
        </>
    );
}

export default Uno;