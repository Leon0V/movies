import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../components/movie/movie.css';
import MovieComments from '../../components/comments/comments';
import commentsData from '../../components/comments/commentsData.json';

export default function Details() {
    const { id } = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movieComments, setMovieComments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`);
                const movie = await response.json();
                if (Object.keys(movie).length === 0) {
                    navigate('/notfound');
                    console.log(movie);
                } else {

                    setSelectedMovie(movie);

                    //function to filter comments, parsing its ID into a base-10 integer:
                    const filteredComments = commentsData.find((item) => item.movie === parseInt(id, 10));

                    //ternary operator conditional utilized in order to set the array with comments as empty, if there is none:
                    setMovieComments(filteredComments ? filteredComments.comments : []);
                }

            } catch (error) {
                //in case of errors:
                console.error(error);
            }
        }

        fetchData();
        //dependency array [id] used to populate with whatever value is provided by the URL (provided via prop before)
    }, [id, navigate]);

    //in case of failure to render, the div is set with a "loading" message:
    if (!selectedMovie) {
        return <div>Loading...</div>;
    }

    // console.log(selectedMovie);

    return (
        <div>
            <h1>{selectedMovie?.titulo}</h1>

            <div className="card">
                <div>
                    <img src={selectedMovie?.poster} alt={selectedMovie?.titulo} className="custom-img" />
                </div>
                <div className="card-body">
                    <h5 className="card-tile">{selectedMovie?.titulo}</h5>
                    <h6>
                        <p>{selectedMovie?.sinopse}</p>
                        <p>{selectedMovie?.ano}</p>
                    </h6>
                    <a href={`https://youtube.com/results?search_query=${selectedMovie?.titulo} Trailer`}>
                        <div className="btn btn-primary">Trailer</div>
                    </a>
                    <div>
                        <MovieComments comments={movieComments} />
                    </div>
                </div>
            </div>
        </div>
    );
}
