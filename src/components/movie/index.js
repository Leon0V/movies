import './movie.css';

const movies = [{
    "name": "Stalker",
    "duration": "161 minutes",
    "picture": "Stalker.jpg",
    "year": "1979",
    "genre": "science fiction",
    "description": "1979 Soviet science fiction art film directed by Andrei Tarkovsky with a screenplay written by Arkady and Boris Strugatsky, loosely based on their 1972 novel Roadside Picnic.",
    "score": "8.1"
},
{
    "name": "Alexander",
    "duration": "175 minutes",
    "picture": "Alexander.jpg",
    "year": "2004",
    "genre": "Epic historical drama",
    "description": "2004 epic historical drama film based on the life of the ancient Macedonian general and king Alexander the Great.",
    "score": "5.6"
},
{
    "name": "The Crow",
    "duration": "175 minutes",
    "year": "1994",
    "picture": "Crow.jpg",
    "genre": "Epic historical drama",
    "description": "1994 American superhero film directed by Alex Proyas, written by David J. Schow and John Shirley.",
    "score": "7.5"
}
]

export default function Movie() {
    return (
        <div className="container-fluid text-center">
            <div class="row">
                {movies.map((movie, i) => (
                    <div className="col-md-4" key={i}>
                        <div className="card">
                            <img height="auto" src={'/assets/images/' + movie.picture} class="img-thumbnail" alt={movie.name} className="card-img-center"
                                max-height="250px" width="auto" max-width="250px"
                            />
                            <div className='card-body'>
                                <h5 className='card-tile'>
                                    {movie.name} ({movie.year})
                                </h5>
                                <h6>
                                    description
                                </h6>
                                <p className='card-text'>{movie.description}</p>
                                <p>{movie.duration}</p>
                                <p>{movie.genre}</p>
                                <h6>{movie.score}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}