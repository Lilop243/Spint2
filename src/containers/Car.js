import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ButtonBuy,H2, Img, Span,  } from '../styles/CarStyle';


function Car () {
  return (
  <div>

    <Form action=""> 
    <Link to="/" >
                <Span>Volver</Span>
    </Link> 
    
         <H2 >Carrito</H2>
         <Img src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1643928177/Frame_20_ogi3zf.png"></Img>
        <ButtonBuy>Pagar</ButtonBuy>
    </Form>

  </div>);
};

export default Car;
