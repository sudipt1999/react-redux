import React from 'react';
import './Modal.css';

const modal = (props) => {
    const ingredients = props.ingredients;
    const order = Object.keys(ingredients).map((ingredient) => {
        return (
            <li key={ingredient}>
                <span>{ingredient} : </span> {ingredients[ingredient]}
            </li>
        )
    })


    return (
        <div className="Modal">
            <h3>Your tasty burger is ready to be ordered !</h3>
            <strong>Total Price : ${props.price.toFixed(2)}</strong>
            <ul>
                {order}
            </ul>
            <div>
                <button className="Button Danger" onClick={props.cancel}>Cancel</button>
                <button className="Button Success" onClick={props.continue}>Checkout</button>
            </div>
        </div>
    )
}

export default modal;