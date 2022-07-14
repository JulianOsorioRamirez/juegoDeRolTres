import Alert from 'react-bootstrap/Alert';
import { useState, useEffect } from 'react';

import ciclista from '../assets/img/ciclista.png';

function AdditionalContentExample() {

    const [info, setInfo] = useState([]);
  
   
    useEffect(() => { 
            const reaquestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    evento: JSON.parse(localStorage.getItem('prueba')).prueba,
                    emailUsuer: JSON.parse(localStorage.getItem('user'))
                })
            };
            fetch('inscripcion', reaquestOptions)
                .then(res => res.json())
                .then(res => {
                    console.log(res._id);
                    setInfo(res._id);
                }).catch(err => {
                    console.log(err)
                }
                );

    }, []);
     
    

    return (
        <div>
        <Alert variant="success" >
            <Alert.Heading>Hey, Ya estas inscrito</Alert.Heading>
            <p>
                Gracias por inscribirte en nuestro evento.

            </p>
            <p>Este es tu numero de inscripción {info}</p>
            <p>El numero de dorsal podras verlo en tu pantalla de historial en cuanto sea asignado por uno de nuestros empleados</p>
            <hr />
            <p className="mb-0">
               Entrenate y disfruta de nuestros eventos.
            </p>
            
        </Alert>
        <img src={ciclista} alt="" />
        </div>
    );
}

export default AdditionalContentExample;