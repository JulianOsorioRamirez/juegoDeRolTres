import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import TarjetaC from '../assets/img/tarjeta.png'
import { useNavigate,useParams } from 'react-router-dom';

function Tarjeta() {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);
    const [nTarjetaSend, setNTarjeta] = useState('');
    const [MonthSend, setMonth] = useState('');
    const [YearSend, setYear] = useState('');
    const [CCVSend, setCCV] = useState('');
    const [nameTarjetaSend, setTarjeta] = useState('');
    const emailUser = JSON.parse(localStorage.getItem('user'));
    console.log(emailUser)
    const prueba = JSON.parse(localStorage.getItem('prueba')).prueba;
    console.log(prueba)




    const sendData = () => {
        
        const reaquestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prueba,
                emailUser,
                nTarjeta: nTarjetaSend,
                Month: MonthSend,
                Year: YearSend,
                CCV: CCVSend,
                nameTarjeta: nameTarjetaSend
            })
        };
        fetch('eventosUsuarios', reaquestOptions)
            .then(res => res.json())
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });

        fetch("tarjeta", reaquestOptions)
            .then(res => res.json())
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err)
            }
            );
            navigate("/ComRealizada");
           
    };


    return (
        

        <Form action="#" class="credit-card-div">
            <div class="panel panel-default" >
                <div class="panel-heading">

                    <div class="row ">
                        <div class="col-md-12">
                            <Form.Control type="text" class="form-control" placeholder="Enter Card Number" onChange={(e) => setNTarjeta(e.target.value)} />
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-md-3 col-sm-3 col-xs-3">
                            <span class="help-block text-muted small-font" > Expiry Month</span>
                            <Form.Control type="text" class="form-control" placeholder="MM" onChange={(e) => setMonth(e.target.value)} />
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                            <span class="help-block text-muted small-font" >  Expiry Year</span>
                            <Form.Control type="text" class="form-control" placeholder="YY" onChange={(e) => setYear(e.target.value)} />
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                            <span class="help-block text-muted small-font" >  CCV</span>
                            <Form.Control type="text" class="form-control" placeholder="CCV" onChange={(e) => setCCV(e.target.value)} />
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                            <img src={TarjetaC} class="img-rounded" />
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-md-12 pad-adjust">

                            <Form.Control type="text" class="form-control" placeholder="Name On The Card" onChange={(e) => setTarjeta(e.target.value)} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 pad-adjust">
                            <div class="checkbox">
                                <label>
                                    Save details for fast payments <a href="https://thumbs.gfycat.com/InconsequentialMelodicGuanaco-size_restricted.gif"> learn how ?</a>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        
                        <div class="col-md-6 col-sm-6 col-xs-6 pad-adjust">
                            <Form.Control type="submit" class="btn btn-warning btn-block" value="PAY NOW" onClick={() => sendData()}  />
                        </div>
                    </div>

                </div>
            </div>
        </Form>
    );
}

export default Tarjeta;