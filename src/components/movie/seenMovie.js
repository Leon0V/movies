import React, { useState } from 'react';

function SeenMovie() {
    let [isSeen, setSeen] = useState("Movie not Watched")

    function countSeen() {
        if (isSeen === "Movie not Watched") {

            setSeen(isSeen = "Movie Already Watched");
        }
        else {
            setSeen(isSeen = "Movie not Watched");
        }

    }


    return (
        <>
            {/* <button onClick={countSeen}>Play</button>
            <br></br>
            <span>{isSeen}</span> */}
            <div className="btn btn-primary" onClick={countSeen}>
                Watched the movie?
            </div>
            <p>
                {isSeen}
            </p>
        </>)
}
export default SeenMovie;