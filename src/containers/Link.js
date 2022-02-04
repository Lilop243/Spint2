import {Link} from 'react-router-dom'
import styled from 'styled-components';

const Links =  () => { 
  return <div>
  <Header className=" ">
    <ul className="nav nav-pills nav-fill">
   
  <li className="nav-item" role="presentation">
  <Link style={{margin:'10px' }} to="/Guajolo" > Guajolotas </Link>
  </li>
  <li className="nav-item" role="presentation">
  <Link style={{margin:'10px'}} to="/Bebidas" > Bebidas </Link>
  </li> 
  <li className="nav-item" role="presentation">
  <Link style={{margin:'10px'}} to="/tamales" > Tamales </Link>
  </li>

    </ul>
  
  </Header>
  </div>
};


const Header = styled.div`
margin-top:52px;
justify-content:center;
display:flex;
`







export default Links;
