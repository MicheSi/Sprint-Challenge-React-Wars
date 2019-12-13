import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function PersonCard() {
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
        <h1>I have data</h1>
    )
}

