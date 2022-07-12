import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function SelectBasicExample() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const reaquestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idPrueba: JSON.parse(localStorage.getItem('user')).user
      })
    };
    fetch('eventoCompra', reaquestOptions)
      .then(res => res.json())
      .then(res => {
        setCards(res.eventos);
      }).catch(err => {
        console.log(err)
      }
      );
  }, []);
console.log(cards)
  return (

    <div className="targetas">
      {cards ? cards.map((tarjeta, i) => {
        return (
          <Card id="pruebaCard" style={{ width: '24.5rem' }}>
            <Card.Img variant="top" src={tarjeta.imagen} />
            <Card.Body>
              <Card.Title>{tarjeta.nombre}</Card.Title>
              <Card.Text>{tarjeta.fecha}</Card.Text>
              <Card.Text>{tarjeta.provincia}---{ tarjeta.precio}</Card.Text>
              <Card.Text>

                Nº de participantes: {(tarjeta.participantes).length}
              </Card.Text>
              
            </Card.Body>
          </Card>
         
        )
      }): <div>Cargando...</div>}
        <Form.Select aria-label="Default select example">
           <option>Open this select menu</option>
           <option value="1">One</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
         </Form.Select>
    </div>
  )
   

}

export default SelectBasicExample;