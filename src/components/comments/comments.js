import React from 'react';

export default function MovieComments({ comments }) {
    return (
        <div className="container mt-4">
            <h4>Comments:</h4>
            {comments.map((comment, index) => (
                <div className="card mt-3" key={index}>
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <img src="https://via.placeholder.com/50" alt="Avatar" className="rounded-circle me-3" />
                            <div>
                                <h6 className="card-title">{comment.user}</h6>
                                <p className="card-text">{comment.comment}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
