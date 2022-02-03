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
  <div className="tab-content" id="pills-tabContent">
    <div className="tab-pane fade show active" id="Guappjolotas" role="tabpanel" aria-labelledby="pills-home-tab">


    </div>
    <div className="tab-pane fade" id="Bebidas" role="tabpanel" aria-labelledby="pills-profile-tab"><Img src="./bebidas.svg" alt=""/>

    </div>
    <div className="tab-pane fade" id="Tamales" role="tabpanel" aria-labelledby="pills-contact-tab"><Img src="./tamales.svg" alt=""/>
   
    </div>
  </div>
</div>;
};


const Header = styled.div`
margin-top:52px;
justify-content:center;
display:flex;
`




const Img = styled.img`
   display: flex;
    margin:auto;


`


export default Links;
