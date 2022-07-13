import Alert from 'react-bootstrap/Alert';

function AdditionalContentExample() {
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