import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const CharCard = (props) => {
    const {name, birth, height, hair, eyes} = props;

    return (
        <div>
            <Card className='card'>
                <CardBody>
                    <CardTitle className='name'>{name}</CardTitle>
                    <CardSubtitle className='birth'>Born: {birth}</CardSubtitle>
                    <CardText>Height: {height}<br></br>
                    Hair Color: {hair}<br></br>
                    Eye Color: {eyes}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default CharCard;