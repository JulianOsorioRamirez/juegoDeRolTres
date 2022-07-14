import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

function BasicExample() {
  const [sendEmailLog, setDataToEmailLog] = useState("");
  const [sendPassLog, setDataToPassLog] = useState("");
  const [sendRole, setRole] = useState("");

  const navigate = useNavigate()
  // console.log(sendEmailLog)

  function Log() {

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: sendEmailLog,
        password: sendPassLog
      })
    };

    fetch("login", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setRole(res.data.role);
      })
      setTimeout(() => {
        if(sendRole === "usuario"){
          localStorage.setItem("user", JSON.stringify(sendEmailLog));
          localStorage.removeItem('empleado');
        }else{
          localStorage.setItem("empleado", JSON.stringify(sendEmailLog));
          localStorage.removeItem('user');
        }
      }, 1000);
      
      console.log(sendRole)
    
    setTimeout(() => {if (sendEmailLog) {
      navigate("/home")
    }

    window.location.reload()
    }, 2000);

    







    


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
      <Button variant="primary" onClick={() => Log()} type="button">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;