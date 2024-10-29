import  { useState } from 'react';

function TogleMovie() {

    const [showMovies, setShowMovies] = useState(false);

    let allMovies = [
        { name: "JIGRA", language: "HINDI", leads: "ALIA BHAT" },
        { name: "RRR", language: "TELUGU", leads: "RAM CHARAN" },
        { name: "MAARI", language: "TAMIL", leads: "DHANUSH" },
        { name: "SITA RAMAN", language: "MALAYALAM", leads: "DULQAR SALMAN" },
        { name: "KGF", language: "KANNADA", leads: "YASH" }
    ];

    let mappedMovies = allMovies.map((eachMovie, index) => (
        <div key={index}>
            {eachMovie.name} - {eachMovie.leads}
        </div>
    ));

    return (
       
        <div className="container m-5 p-5">
             <h2>movie toggle comp</h2>
            <button className="btn btn-primary" onClick={() => setShowMovies(true)}>
                VIEW MOVIES
            </button>
            {showMovies && (
                <>
                    {mappedMovies}
                </>
            )}
        </div>
    );
}

export default TogleMovie;
