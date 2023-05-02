import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../components/movie/movie.css';

export default function Details() {

    const { id } = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`);
                const movie = await response.json();
                setSelectedMovie(movie);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [id]);

    if (!selectedMovie) {
        return <div>Loading...</div>;
    }

    console.log(selectedMovie);

    return (
        <div>
            <h1>{selectedMovie?.titulo}</h1>

            <div className="card">
                <img src={selectedMovie?.poster} alt={selectedMovie?.titulo} className="card-img-center round img-detail" />
                <div className='card-body'>
                    <h5 className='card-tile'>
                        {selectedMovie?.titulo}
                    </h5>
                    <h6>
                        <p>{selectedMovie?.sinopse}</p>
                        <p>{selectedMovie?.ano}</p>
                        <p>Metacritic: {selectedMovie?.nota}</p>
                    </h6>
                    <a href={`https://youtube.com/results?search_query=${selectedMovie?.titulo} Trailer`} >
                        <div className="btn btn-primary">
                            Trailer
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
}
