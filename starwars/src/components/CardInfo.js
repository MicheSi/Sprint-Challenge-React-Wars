import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CharCard from './CharCard';

export default function CardInfo() {
    const [character, setCharacter] = useState([]);


    useEffect(() => {
        axios.get('https://swapi.co/api/people/?page=1')
        .then(response => {
            console.log(response.data.results)
            setCharacter(response.data.results)
        })
        .catch(err => {
            console.log('Sorry, no data', err);
        })
    }, []);

    return (
        <div className="charCard">
            {character.map((person, index) => {
                return <CharCard
                key={index}
                name={person.name}
                birth={person.birth_year}
                height={person.height}
                hair={person.hair_color}
                eyes={person.eye_color} />
            })}
        </div>
    )
}

