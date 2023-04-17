import { useParams } from 'react-router-dom';
import '../../components/movie/movie.css';

export default function Details() {

    const { movie } = useParams();
    const selectedMovie = require('../../components/movie/movieList.json').find( x => x.name === movie);

    return (
        <div>
            <h1>{movie}</h1>

            <div className="card">
                <img src={'/assets/images/' + selectedMovie.picture} alt={selectedMovie.name} className="card-img-center round img-detail" />
                <div className='card-body'>
                    <h5 className='card-tile'>
                        {selectedMovie.name}
                    </h5>
                    <h6>
                        Description
                    </h6>
                    <p className='card-text'>{selectedMovie.description}</p>
                    <p>{selectedMovie.duration}</p>
                    <h6>
                        <p>{selectedMovie.genre}</p>
                        <p>{selectedMovie.year}</p>
                        <p>Metacritic: {selectedMovie.score}</p>
                    </h6>
                    <a href={`https://youtube.com/results?search_query=${selectedMovie.name} Trailer`} >
                        <div className="btn btn-primary">
                            Trailer
                        </div>
                    </a>

                </div>
            </div>
        </div>


    )
}