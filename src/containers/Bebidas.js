import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


function Bebidas () {
    const url = 'https://sprintdos.herokuapp.com/bebidas/'
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
      
      
      
      <Link style={{ margin: '10px' }} to={`//${todo.id}`} key={todo.id} ><img src={todo.imagen} alt="" />
              </Link>
          </div>
         )

       })

       }
     </div>
   )    
}

export default Bebidas;
