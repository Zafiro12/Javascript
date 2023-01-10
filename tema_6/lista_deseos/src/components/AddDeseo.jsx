function AddDeseo(props)
{
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            props.f(deseo.value);
        }
    }

    return(
        <input type='text' name='deseo' id='deseo' onKeyDown={handleKey} style={{marginTop: '1em'}} />
    );
}

export default AddDeseo;
