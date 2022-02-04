import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bebidas from '../containers/Bebidas';
import CarBebidas from '../containers/CarBebidas';



const DataRouters = () => {
    const url = 'https://sprintdos.herokuapp.com/bebidas/'
    const [todos1, setTodos1] = useState()
    const fetchApi = async () => {
      const response = await fetch(url)
      const responseJSON = await response.json()
      setTodos1(responseJSON)
    }
  
    useEffect(() => {
      fetchApi()
    }, [])
  


  return (
    <BrowserRouter>
    <Routes>
        <Route path="/CarBebidas/:id" element={<CarBebidas todos1={todos1} />}/>
        <Route path="/Bebidas" element={<Bebidas todos1={todos1} />} />
    </Routes>
</BrowserRouter>
  )
};

export default DataRouters;
