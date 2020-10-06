import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Username: {props.name}</p>
            <p>{props.body}</p>
        </div>
    )
};

export default userOutput;