import React from 'react';

const userInput = (props) => {
    return (
        <div>
        <label for="userIn">User Input </label>
        <input type="text" onChange={props.changed} value={props.name} id="userIn" name="userIn"/>
        </div>
    )
};

export default userInput;