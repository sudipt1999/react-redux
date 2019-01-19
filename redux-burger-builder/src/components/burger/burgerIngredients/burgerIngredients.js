import React from 'react';
import './burgerIngredient.css';

const burgerIngredients = (props) => {
    let item = null;
    switch (props.type) {
        case "BreadTop": item = <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
        </div>;
            break;
        case "BreadBottom": item = <div className="BreadBottom">
        </div>;
            break;
        case "bacon": item = <div className="Bacon">
        </div>;
            break;
        case "meat": item = <div className="Meat">
        </div>;
            break;
        case "salad": item = <div className="Salad">
        </div>;
            break;
        case "cheese": item = <div className="Cheese">
        </div>;
            break;
        default: item = null;

    }


    return (
        item
    )

}


export default burgerIngredients;