
import MovieProps from './MovieProps'; 

function Movie() {
    const movies = [
        { name: "JIGRA", language: "HINDI", leads: "ALIA BHAT" },
        { name: "RRR", language: "TELUGU", leads: "RAM CHARAN" },
        { name: "MAARI", language: "TAMIL", leads: "DHANUSH" },
        { name: "SITA RAMAN", language: "MALAYALAM", leads: "DULQAR SALMAN" },
        { name: "KGF", language: "KANNADA", leads: "YASH" }
    ];

    return (
        <>
            <h3>Movie List</h3>
            {movies.map((movie, index) => (
                <MovieProps
                    key={index}
                    name={movie.name}
                    language={movie.language}
                    leads={movie.leads}
                />
            ))}
        </>
    );
}

export default Movie;
