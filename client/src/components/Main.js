import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Nav from "../components/Nav";
import Pruebas from "../pages/Puebas";
import Andalucia from "../pages/Andalucia";



class Main extends Component {
  


    render() {
        return (
        <div>
             <Nav />
            <Routes>
                <Route path="/home"  element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/pruebas" element={<Pruebas />} />
                <Route path="/andalucia" element={<Andalucia />} />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
                
            </Routes>
        </div>
        );
    }
}
export default Main;