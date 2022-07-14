import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [sendName, setDataToName] = useState("");
  const [sendUnName, setDataToUname] = useState("");
  const [sendEmail, setDataToEmail] = useState("");
  const [sendPass, setDataToPass] = useState("");
  const [sendConfPass, setDataToConfPass] = useState("");

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  

  function Registro  ()  {
    


    console.log(sendName);
    console.log(sendUnName);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({userName: sendName,
                            apellidos: sendUnName,
                            password : sendPass,
                            email: sendEmail,
                            tarjeta : "",
                            role: "Usuario"})
    };

    fetch("users", requestOptions)
      .then((response) => response.json())
      .then((res) =>{
        console.log(res)
        
      })
    };


  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control onChange={(e) => setDataToName(e.target.value)}
            required
            type="text"
            
            placeholder="First name"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control onChange={(e) => setDataToUname(e.target.value)} required type="text" placeholder="Last name"/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control onChange={(e) => setDataToEmail(e.target.value)}
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Pass</Form.Label>
          <Form.Control onChange={(e) => setDataToPass(e.target.value)} type="password" placeholder="Password" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Confirm Pass</Form.Label>
          <Form.Control type="password" onChange={(e) => setDataToConfPass(e.target.value)}placeholder="Password" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check id="formCheck"
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button id="registrerBtn" onClick={() => Registro()} type="submit">Submit form</Button>
    </Form>
  );
}

export default FormExample;