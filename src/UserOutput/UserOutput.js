import React from 'react';
import '../UserInput/UserInput.css'

const userOutput = (props) => {
    return (
        <div className="userInput">
            <p>Username: {props.name}</p>
            <p>{props.body}</p>
        </div>
    )
};

export default userOutput;