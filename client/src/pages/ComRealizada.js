import Alert from 'react-bootstrap/Alert';
import { useState, useEffect} from 'react';



function AdditionalContentExample() {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        const reaquestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                idPrueba: JSON.parse(localStorage.getItem('prueba')).prueba,
                emailUsuer: JSON.parse(localStorage.getItem('user'))
            })
        };
        fetch('eventoCompra', reaquestOptions)
            .then(res => res.json())
            .then(res => {
                setInfo(res.eventos);
            }).catch(err => {
                console.log(err)
            }
            );
    }, []);
    console.log(info)

  return (
    <Alert variant="success">
      <Alert.Heading>Hey, Ya estas inscrito</Alert.Heading>
      <p>
        Gracias por inscribirte en nuestro evento.

      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  ); 
}

export default AdditionalContentExample;