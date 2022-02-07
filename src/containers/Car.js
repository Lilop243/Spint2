import React from 'react';
import { Form } from 'react-bootstrap';
import { ButtonBuy, H2, Img } from '../styles/CarStyle';


function Car() {

  const productoLS = JSON.parse(localStorage.getItem('car')) || []

  return (
    <div>

      {
        productoLS.map((produc, index) => (
          <div key={index}>
            <img src={produc.imagen} />
            <h4>{produc.nombre}</h4>
            <h4>{produc.precio}</h4>
          </div>
        ))
      }
      <Form action="">
        <H2 >Carrito</H2>
        <Img src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1643928177/Frame_20_ogi3zf.png"></Img>
        <ButtonBuy>Pagar</ButtonBuy>
      </Form>

    </div>);
};

export default Car;
