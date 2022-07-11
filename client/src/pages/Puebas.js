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
                    <Card style={{ width: '24.5rem' }}>
                        <Card.Img variant="top" src={tarjeta.imagen} />
                        <Card.Body>
                            <Card.Title>{tarjeta.nombre}</Card.Title>
                            <Card.Text>{tarjeta.fecha}</Card.Text>
                            <Card.Text>---{tarjeta.provincia}</Card.Text>
                            <Card.Text>
                                Nº de participantes: {(tarjeta.participantes).length}
                            </Card.Text>
                            <Button variant="primary">Inscribirte</Button>
                        </Card.Body>
                    </Card>
                )
            }) : <div>Cargando...</div>}
        </div>
    )
}

export default BasicExample;