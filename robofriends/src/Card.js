import React from 'react';

const Card = (props) => {
    return(

        <div className='tc bw2 shadow5 bg-light-green dib br3 pa3 ma2 grow'>
            <img src={`https://robohash.org/${props.id}?200x200`} alt='robot'/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );

}

export default Card;