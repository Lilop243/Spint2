import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../App';
import Bebidas from '../containers/Bebidas';
import Car from '../containers/Car';
import Guajolo from '../containers/Guajolo';
import Nada from '../containers/Nada';
import Tamales from '../containers/Tamales';


const AppRouters = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/Nada" element={<Nada />}/>
            <Route path="/Guajolo" element={<Guajolo/>} />
            <Route path="/Bebidas" element={<Bebidas/>} />
            <Route path="/Tamales" element={<Tamales/>} />
            <Route path="/" element={<Nada/>} />
            <Route path="/Car" element={<Car/>} />
        </Routes>
    </BrowserRouter>
  )
};


export default AppRouters;
