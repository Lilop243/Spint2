import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import '../styles.css'


const Todo = () => {

  return (

    <div>

      {/* Navbar */}
      <nav className="navbar navbar-light ">
        <div className="container-fluid">
          <a href="/"className="navbar-brand"><img src="./imagenes/logo.svg" width="80px" alt=""></img></a>
          <form className="d-flex">
            <a href="/car"><img src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1643926199/Group_66_ck35yk.png" alt="" width="40px" /></a>

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
          <FontAwesomeIcon icon={faSearch} />
          <Busqueda type="text" placeholder="Sabor de guajolota, bebida..." />
        </BarraBuscar>
      </ContainerBuscar>

      {/* Productos  */}

      <Header className=" ">
    <ul className="nav nav-pills nav-fill">
   
  <Li className="nav-item" role="presentation">
  <Link style={{margin:'10px' }} to="/Guajolo" > Guajolotas </Link>
  </Li>
  <Li className="nav-item" role="presentation">
  <Link style={{margin:'10px'}} to="/Bebidas" > Bebidas </Link>
  </Li> 
  <Li className="nav-item" role="presentation">
  <Link style={{margin:'10px'}} to="/tamales" > Tamales </Link>
  </Li>

    </ul>
  
  </Header>
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
const Header = styled.div`
margin-top:52px;
justify-content:center;
display:flex;
`
const Li = styled.li
`
padding-left:35px;

`



// const Img = styled.img`
//    display: flex;
//     margin:auto;
// `

//const  = styled.a ``

export default Todo;