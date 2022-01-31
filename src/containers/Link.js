import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Links =  () => { 
  return <div>
  <Header className=" ">
    <ul className="nav nav-pills nav-fill">
   
  <li className="nav-item" role="presentation">
  <Link to="/Guajolo" > Guajolotas </Link>
  </li>
  <li className="nav-item" role="presentation">
  <Link to="/bebidas" > Bebidas </Link>
  </li> 
  <li className="nav-item" role="presentation">
  <Link to="/tamales" > Tamales </Link>
  </li>

    </ul>
  
  </Header>
  <Div className="tab-content" id="pills-tabContent">
    <div className="tab-pane fade show active" id="Guappjolotas" role="tabpanel" aria-labelledby="pills-home-tab"></div>
    <div className="tab-pane fade" id="Bebidas" role="tabpanel" aria-labelledby="pills-profile-tab"><Img src="./bebidas.svg" alt=""/></div>
    <div className="tab-pane fade" id="Tamales" role="tabpanel" aria-labelledby="pills-contact-tab"><Img src="./tamales.svg" alt=""/></div>
  </Div>
</div>;
};

const Button = styled.button`
    font-size:20px;
    border:none;
    background-color:#F7EEFE;
    
    &:hover{
      color:orange;
    }
  &:focus {
    color: red;
  }
  &:active {
    color: yellow;
  }
   

`

const Header = styled.div`
margin-top:52px;
justify-content:center;
display:flex;
`

const Div = styled.div`
  

`


const Img = styled.img`
   display: flex;
    margin:auto;


`


export default Links;
