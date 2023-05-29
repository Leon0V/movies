import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../components/movie/movie.css';
import MovieComments from '../../components/comments/comments';

import commentsData from '../../components/comments/commentsData.json';

export default function Details() {
    //provided param with the ID of the selected movie:
    //the useParam hook retrieves the ID from the URL
    const { id } = useParams();
    //variables with the selected movie and related comments:
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movieComments, setMovieComments] = useState([]);

    //the useEffect hook works and asynchronous function in order to retrieve the data with the fetchData function,
    //where the fetch request takes the data from the provided URL below, converting to a json using response.json,
    //then, the data is set inside the variables within setSelectedMovie and setMovieComments:
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`);
                const movie = await response.json();
                setSelectedMovie(movie);

                //function to filter comments, parsing its ID into a base-10 integer:
                const filteredComments = commentsData.find((item) => item.movie === parseInt(id, 10));

                //ternary operator conditional utilized in order to set the array with comments as empty, if there is none:
                setMovieComments(filteredComments ? filteredComments.comments : []);

            } catch (error) {
                //in case of errors:
                console.error(error);
            }
        }

        fetchData();
        //dependency array [id] used to populate with whatever value is provided by the URL (provided via prop before)
    }, [id]);

    //in case of failure to render, the div is set with a "loading" message:
    if (!selectedMovie) {
        return <div>Loading...</div>;
    }

    console.log(selectedMovie);

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
