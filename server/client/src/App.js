import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import MainComponent from "./components/Main";

import './App.css';

function App() {
  return (
   
    <BrowserRouter>
    
    <MainComponent />
   
  </BrowserRouter>
  );
}

export default App;
