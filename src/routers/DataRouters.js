import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bebidas from '../containers/Bebidas';
import CarBebidas from '../containers/CarBebidas';



const DataRouters = () => {
    const url = 'https://sprintdos.herokuapp.com/bebidas/'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
      const response = await fetch(url)
      const responseJSON = await response.json()
      setTodos(responseJSON)
    }
  
    useEffect(() => {
      fetchApi()
    }, [])
  


  return (
    <BrowserRouter>
    <Routes>
        <Route path="/CarBebidas/:id" element={<CarBebidas todos={todos} />}/>
        <Route path="/Bebidas" element={<Bebidas todos={todos} />} />
    </Routes>
</BrowserRouter>
  )
};

export default DataRouters;
