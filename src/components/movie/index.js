import { useState, useEffect } from 'react';
import './movie.css';
import SeenMovie from './seenMovie';

export default function Movie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
            .then((response) => response.json())
            .then((movies) => setMovies(movies));
    }, []);
    return (
        <div className="container-fluid text-center">
            <div className="row">
                {movies.map((movie) => (
                    <div className="col-md-4" key={movie.id}>
                        <div className="card">
                            <img src={movie.poster} alt={movie.titulo} className="card-img-center round img-detail" />
                            <div className='card-body'>
                                <h5 className='card-tile'>
                                    {movie.titulo}
                                </h5>
                                <div className='container'>
                                    <a href={`/details/${movie.id}`} >
                                        <div className="btn btn-primary">
                                            About
                                        </div>
                                    </a>
                                </div>
                                <SeenMovie Movie={movie} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}