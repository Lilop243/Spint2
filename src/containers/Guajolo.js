import React, { useEffect, useState } from 'react';


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
<<<<<<< HEAD
         return <div className="tab-pane fade show active" id="Guappjolotas" role="tabpanel" aria-labelledby="pills-home-tab"><img src={todo.imagen} alt=""/></div>
=======
         return <div className="tab-pane fade show active" id="Guappjolotas" role="tabpanel" aria-labelledby="pills-home-tab">
         <img src="{todo.imagen}" alt=""/>
         </div>
>>>>>>> 6b3fad4103287d5bc947d88b548018fd467e3380

       })

       }
     </div>
   )    
}

export default Guajolo;