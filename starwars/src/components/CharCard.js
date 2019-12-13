import React from 'react';

const CharCard = (props) => {
    const {name, birth, height, hair, eyes} = props;

    return (
        <div>
            <h1>{name}</h1>
            <h3>Born: {birth}</h3>
            <h3>Height: {height}</h3>
            <h3>Hair Color: {hair}</h3>
            <h3>Eye Color: {eyes}</h3>
        </div>
    )
}

export default CharCard;