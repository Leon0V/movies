import React, { useState } from 'react';


function SeenMovie({ Movie }) {
    let [isSeen, setSeen] = useState(Movie.assistido ? "Movie watched" : "Movie not Watched")

    function countSeen() {
        Movie.assistido = !Movie.assistido
        setSeen(isSeen = Movie.assistido ? "Movie watched" : "Movie not Watched")
    }


    return (
        <>
            <div className="btn btn-primary" id={Movie.name} onClick={countSeen}>
                Watched the movie?
            </div>
            <p>
                {isSeen}
            </p>
        </>)
}
export default SeenMovie;