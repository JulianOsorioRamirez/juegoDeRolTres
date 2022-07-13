import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState,useEffect } from "react";

function BasicExample() {
  const [sendEmailLog, setDataToEmailLog] = useState("");
  
  const [sendPassLog, setDataToPassLog] = useState("");
  

  function Log () {
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email: sendEmailLog,
                            password: sendPassLog})
    };
    
    fetch("login", requestOptions)
      .then((response) => response.json())
      .then(res => {
        console.log(res)
    })
    
      localStorage.setItem("user", JSON.stringify(sendEmailLog));

    }
    
    
  
    
   
        
    
    

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={(e) => setDataToEmailLog(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={(e) => setDataToPassLog(e.target.value)} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary"  onClick={() => Log()} type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;