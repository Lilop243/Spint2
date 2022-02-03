import React, { useEffect, useState } from 'react';



function Bebidas () {
    const url = 'https://apiguajolotas.herokuapp.com/Bebidas/'
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
         return <div className="tab-pane fade show active" id="Bebidas" role="tabpanel" aria-labelledby="pills-home-tab"><img src={todo.imagen} alt=""/></div>

       })

       }
     </div>
   )    
}

export default Bebidas;
