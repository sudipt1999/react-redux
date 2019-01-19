import React from 'react';
import BurgerHandler from './burgerHandler/burgerHandler';
import './burgerManager.css';


const items = ['meat', 'cheese', 'salad', 'bacon'];

const burgerManager = (props) => {
    let ingredients = { ...props.ingredients };
    let transformedIngredients = items.map((ingredient) => {

        return (<BurgerHandler
            key={ingredient}
            item={ingredient}
            disabled={!(ingredients[ingredient] > 0)}
            add={() => { props.addItem(ingredient) }}
            reduce={() => { props.reduceItem(ingredient) }}

        />)
    });


    return (
        <div className="BuildControls">
            <strong>Your Total Amount is $ {props.price.toFixed(2)}</strong>
            {transformedIngredients}
            <button className="OrderButton" onClick={props.toggleModal} disabled={!(props.price > 4)}>Order Now</button>
        </div>
    );


}

export default burgerManager;