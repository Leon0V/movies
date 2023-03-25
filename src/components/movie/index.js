import './movie.css';

const movies = require('../../components/movie/movieList.json');

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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}