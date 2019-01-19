import React from 'react';
import './burgerHandler.css';

const burgerHandler = (props) => {

    return (
        <div className="BuildControl">
            <span className="Label">{props.item}</span>
            <button className="Less" onClick={props.reduce} disabled={props.disabled}>Less</button>
            <button className="More" onClick={props.add}>More</button>
        </div>
    );

}

export default burgerHandler;