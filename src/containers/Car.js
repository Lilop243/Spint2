import React from 'react';
import { ButtonBuy } from '../styles/CarStyle';



function Car() {

  const productoLS = JSON.parse(localStorage.getItem('car')) || []

  const pagar = () => {
    localStorage.removeItem('car')
    window.location.href = "/"
}
    
  return (
    <div>
                <h1>Carrito</h1>

      {
        productoLS.map((produc, index) => (
          <div key={index}>
            <img src={produc.imagen} alt="imagen" />
            <h4>{produc.nombre}</h4>
            <h4>{produc.precio}</h4>
          </div>
        ))
      }
<a href="Guajolo"><ButtonBuy onClick={() => pagar()}>Pagar</ButtonBuy></a>
             

    </div>);
};

export default Car;