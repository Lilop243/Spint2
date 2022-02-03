import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Nada({ todos }) {

  const { id } = useParams()
  const producto = todos.find((product) => product.id === Number(id))
  const { imagen, precio,nombre } = producto

  return <div>
    <img src={imagen} alt="" />
    <h3>{nombre}</h3>
    <h3>${precio}</h3>
    <div>
      <p>Sabor</p>

    </div>

    <div>
      <h3>Guajolocombo</h3>
      <p>Selecciona la bebida que mas te guste y disfruta tu desayuno </p>
    </div>
  </div>;




};

export default Nada;
