import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, CardImg
  } from 'reactstrap';

const CharCard = (props) => {
    const {name, birth, height, hair, eyes} = props;

    return (
        <div>
            <Card className='card'>
                <CardImg className='image'></CardImg>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                        <CardSubtitle>Born: {birth}</CardSubtitle>
                        <CardText>Height: {height}</CardText>
                        <CardText>Hair Color: {hair}</CardText>
                        <CardText>Eye Color: {eyes}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default CharCard;