import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../App';
import Bebidas from '../containers/Bebidas';
import Car from '../containers/Car';
import Guajolo from '../containers/Guajolo';
import Nada from '../containers/Nada';
import Tamales from '../containers/Tamales';
import Todo from '../containers/Todo';


const AppRouters = () => {
  const url = 'https://sprintdos.herokuapp.com/guapjolotas/'
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
    <Todo />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Nada/:id" element={<Nada todos={todos} />} />
        <Route path="/Guajolo" element={<Guajolo todos={todos} />} />
        <Route path="/Bebidas" element={<Bebidas />} />
        <Route path="/Tamales" element={<Tamales />} />
        <Route path="/" element={<Nada />} />
        <Route path="/Car" element={<Car />} />
      </Routes>
    </BrowserRouter>
  )
};


export default AppRouters;
