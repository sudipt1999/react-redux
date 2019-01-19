import React from 'react';
import BurgerIngredients from './burgerIngredients/burgerIngredients';
import './burger.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredients key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Start Adding ingredients</p>
    }

    return (
        <div className="Burger">
            <BurgerIngredients type="BreadTop" />
            {transformedIngredients}
            <BurgerIngredients type="BreadBottom" />
        </div>
    );
}

export default burger;