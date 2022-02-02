import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'



function Guajolo () {
    const url = 'https://apiguajolotas.herokuapp.com/guapjolotas/'
    const [todos, setTodos] = useState()
    const fetchApi = async() => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }
    useEffect(()=>{
        fetchApi()
    }, [])
   return(
       <div>

         
       { !todos ? 'cargando...':
       todos.map((todo,index)=>{
         return (

          <div>
      
      
      <Link style={{margin:'10px'}} to="/Nada" ><img src={todo.imagen} alt=""/>
</Link>

          </div>
         )

       })

       }
     </div>
   )    
}

export default Guajolo;
