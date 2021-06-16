import React from 'react';

// function Tweet(props) {
//     return (
//         <div className="tweet">
//             <h3>{props.name}</h3>
//             <p>{props.message}</p>
//             <h3>Number of Likes</h3>
//         </div>
//     );
// }

function Tweet({ name, message }) {
    return (
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>Number of Likes</h3>
        </div>
    );
}

export default Tweet;
