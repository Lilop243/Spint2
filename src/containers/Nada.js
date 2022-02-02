import React from 'react';
import {Link} from 'react-router-dom'



function Nada () {
  return <div>
       <img src="./imagenes/g-verde.svg" alt=""/>
       <h3>Guajolota de Tamal Verde</h3>
       <h3>$25 MXN</h3>

       
<div>
<p>Sabor</p>
</div>

<div>
<h3>Guajolocombo</h3>
<p>Selecciona la bebida que mas te guste y disfruta tu desayuno </p>
</div>
<Link style={{margin:'10px'}} to="/Car" ><button>agregar</button></Link>
  </div>;




};

export default Nada;
