import React from "react";

const Action = ({action}) => {
    return (
        <li>
            <span>{ action.title }</span>
            <small>{ action.time }</small>
        </li>
    ); 
};

export default Action;