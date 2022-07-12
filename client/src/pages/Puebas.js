import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {

    const [cards, setCards] = useState([]);
    const [Recoger, setRecoger] = useState("");
    
    
    localStorage.setItem('prueba', JSON.stringify({
        prueba: Recoger
    }));
    

    useEffect(() => {
       
        fetch('eventos')
            .then(res => res.json())
            .then(res => {
                setCards(res.eventos);
                // setMensaje(res.mensage)
              
                })
                .catch(err => {   
                    console.log(err) 
                }
                );
                
            
    }, []);


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
                                Nº de participantes inscritos: {(tarjeta.participantes).length}
                            </Card.Text>
                            <Card.Text>
                                Nº maximo de participantes : {tarjeta.maxParticipantes}
                            </Card.Text>
                            {(tarjeta.participantes).length < 10 ?
                            <Button variant="primary" href={`/compra `} onClick={()=>setRecoger(tarjeta._id)}>Inscribirte</Button>
                                :  <Card.Text>
                                    <h1 style={{color:"red",border:"1px solid red"}}> No quedan Plazas disponibles </h1>
                                </Card.Text>
                            }
                        </Card.Body>
                    </Card>
                )
            }) : <div>Cargando...</div>}
        </div>
    )
}

export default BasicExample;