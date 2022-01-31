import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../App';
import Nada from '../containers/Nada';


const AppRouters = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/Nada" element={<Nada />}/>
        </Routes>
    </BrowserRouter>
  )
};


export default AppRouters;
