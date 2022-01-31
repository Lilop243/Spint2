import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Todo  =  () => {
 
 
 
  	return (

<div>

  {/* Navbar */}
  <nav class="navbar navbar-light ">
    <div class="container-fluid">
    <a class="navbar-brand" href ><img src="./imagenes/logo.svg" width="80px" alt=""></img></a>
    <form class="d-flex">   
    <img src="https://cdn-icons.flaticon.com/png/512/2366/premium/2366367.png?token=exp=1642868532~hmac=6dd18ca8bd0e6a91785dd9e272ecb4e8" alt="" width="40px"/>
      
    </form>
    </div>
  </nav>


{/* Titulo */}
    <Container>
      <Title>Nada como una Guajolota para empezar el dìa</Title>
    </Container><br></br>

{/* barra de busqueda */}
    <ContainerBuscar>
                <BarraBuscar >
                <FontAwesomeIcon icon={faSearch}/>
                    <Busqueda type="text" placeholder="Sabor de guajolota, bebida..."/>           
                </BarraBuscar>
    </ContainerBuscar> 

{/* Productos  */}
    

</div>
  	)
  };

const Title = styled.h2`
text-align: center;
`
const ContainerBuscar = styled.div`
display:flex;
gap: 5px;
justify-content: center;
`;

const BarraBuscar = styled.div`
    font-size: 20px; 
    border-radius: 20px;
    background: #D5D8DC; 
    padding: 10px;
    display:flex;
    width:100%;
    max-width:500px;
`;
const Busqueda = styled.input`
background: #D5D8DC; 
padding-left:10px;
font-size: 15px;
width: 100%;
outline: none;
  border: 0;
`

// const Img = styled.img`
//    display: flex;
//     margin:auto;
// `

//const  = styled.a ``
 
export default Todo;