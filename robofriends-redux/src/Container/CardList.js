import React from 'react';
import Card from './Card';

const CardList = ({ robot }) => {
    const cardArray = robot.map((user, i) => {
        return (<Card
            key={i}
            id={robot[i].id}
            name={robot[i].name}
            email={robot[i].email}
        />);
    })
    return (
        <div>
            {cardArray}
        </div>
    );
}

export default CardList;