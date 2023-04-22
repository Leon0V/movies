import React, { useState } from 'react';

// const movies = require('../../components/movie/movieList.json');

function SeenMovie({ Movie }) {
    let [isSeen, setSeen] = useState(Movie.watched ? "Movie watched" : "Movie not Watched")

    function countSeen() {
        // if (isSeen === "Movie not Watched") {

        //     setSeen(isSeen = "Movie Already Watched");
        // }
        // else {
        //     setSeen(isSeen = "Movie not Watched");
        // }
        Movie.watched = !Movie.watched
        setSeen(isSeen = Movie.watched ? "Movie watched" : "Movie not Watched")
    }


    return (
        <>
            {/* <button onClick={countSeen}>Play</button>
            <br></br>
            <span>{isSeen}</span> */}
            <div className="btn btn-primary" id={Movie.name} onClick={countSeen}>
                Watched the movie?
            </div>
            <p>
                {isSeen}
            </p>
        </>)
}
export default SeenMovie;