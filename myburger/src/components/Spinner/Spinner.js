import React from 'react';
import './Spinner.css';


const spinner = (props) => {
    return (
        <div className="centerDiv">
            <div className="lds-circle" > <div></div></div>
        </div>
    );
}

export default spinner;