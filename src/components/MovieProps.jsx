

function MovieProps({ name, language, leads }) {
    return (
        <div>
            <h4>{name}</h4>
            <p>Language: {language}</p>
            <p>Leads: {leads}</p>
          
        </div>
    );
}

export default MovieProps;
