
import React, { Component, useEffects, useState } from 'react';


import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Nav from './Nav';
import Pruebas from '../pages/Puebas';
import Andalucia from '../pages/Andalucia';
import Bilbao from '../pages/Bilbao';
import Madrid from '../pages/Madrid';
import Compra from '../pages/Compra';
import ComRealizada from '../pages/ComRealizada';
import { Historial } from '../pages/Historial';

class Main extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/pruebas' element={<Pruebas />} />
          <Route path='/andalucia' element={<Andalucia />} />
          <Route path='/bilbao' element={<Bilbao />} />
          <Route path='/madrid' element={<Madrid />} />
          <Route path='/compra' element={<Compra />} />
          <Route path='/historial' element={<Historial />} />
          <Route path='/ComRealizada' element={<ComRealizada />} />
          <Route path='*' element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </div>
    );
  }

  



}
export default Main;
