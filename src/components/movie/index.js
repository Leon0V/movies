import './movie.css';
import SeenMovie from './seenMovie';

const movies = require('../../components/movie/movieList.json');

// function Watched({ Seen }) {
//     if (Seen) {
//         return <p className='text-success'>already watched</p>
//     } else {
//         return <p className='text-secondary'>not watched</p>
//     }

// }

export default function Movie() {
    return (
        <div className="container-fluid text-center">
            <div class="row">
                {movies.map((movie, i) => (
                    <div className="col-md-4" key={i}>
                        <div className="card">
                            <img src={'/assets/images/' + movie.picture} alt={movie.name} className="card-img-center round img-detail" />
                            <div className='card-body'>
                                <h5 className='card-tile'>
                                    {movie.name}
                                </h5>
                                <p className='card-text'>{movie.genre}</p>
                                <div className='container'>
                                    <a href={`/details/${movie.name}`} >
                                        <div className="btn btn-primary">
                                            About
                                        </div>
                                    </a>
                                </div>
                                {/* <Watched Seen={movie.watched} /> */}
                                <SeenMovie />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}