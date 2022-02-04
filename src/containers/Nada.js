import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';




function Nada({ todos }) {

  const { id } = useParams()
  const producto = todos.find((product) => product.id === Number(id))
  const { imagen, precio,nombre } = producto

  return <div>
           
           {/* <a href="http://"><img src="https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png" width="80px" alt=""></img></a> */}

  
    <img src={imagen} alt="" />
    <h3>{nombre}</h3>
    <h3>${precio}</h3>
    <div>
      <h3>Sabor</h3>

    </div>

    <div>
      <h3>Guajolocombo</h3>
      <p>Selecciona la bebida que mas te guste y disfruta tu desayuno </p>
    </div>
    <Button>Agregar al carrito</Button>
  </div>;




};

export default Nada;
