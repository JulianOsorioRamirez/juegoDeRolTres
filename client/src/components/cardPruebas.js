import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {

    const [cards, setCards] = useState([]);

    

    useEffect(() => {
        fetch('eventos')
            .then(res => res.json())
            .then(res => {
                setCards(res.eventos);
                console.log(res.eventos);
                })
                .catch(err => {   
                    console.log(err) 
                }
                );
                
            
    }, []);

console.log(cards)
    return (
        <div className="targetas">

            {cards ? cards.map((tarjeta, i) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
            }) : <div>Cargando...</div>}
        </div>
    )
}

export default BasicExample;