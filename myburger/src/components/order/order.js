import React from 'react';
import './order.css';

const order = (props) => {
    return (
        <div className="order-Div">
            <div className="personal-info">
                <p>Name : {props.name}</p>
                <p>Email: {props.email}</p>
                <p>Country : {props.personalInfo.country}</p>
                <p>Street : {props.personalInfo.street}</p>
                <p>ZipCode : {props.personalInfo.zipcode}</p>
            </div>
            <hr></hr>
            <div className="order-details">
                <h3>Ingredients :</h3>
                <p>Bacon : {props.ingredients.bacon}</p>
                <p>Cheese : {props.ingredients.cheese}</p>
                <p>Meat : {props.ingredients.meat}</p>
                <p>Salad : {props.ingredients.salad}</p>
                <hr></hr>
                <strong>
                    <span>
                        Total Price : ${props.price}
                    </span>
                </strong>
            </div>
        </div>

    );
}

export default order;