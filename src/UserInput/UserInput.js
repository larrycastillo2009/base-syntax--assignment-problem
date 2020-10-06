import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className="userInput">
        <label for="userIn">User Input </label>
        <input type="text" onChange={props.changed} value={props.name } id="userIn" name="userIn"/>
        </div>
    )
};

export default userInput;