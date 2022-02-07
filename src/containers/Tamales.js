import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'



function Tamales () {
    const url = 'https://sprintdos.herokuapp.com/tamales/'
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
      
      <Link style={{ margin: '10px' }} to={`/Nada/${todo.id}/tamales`} key={todo.id} ><img src={todo.imagen} alt="" />
              </Link>

      
          </div>
         )

       })

       }
     </div>
   )    
}

export default Tamales;