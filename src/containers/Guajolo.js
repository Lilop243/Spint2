import React from 'react';
import { Link } from 'react-router-dom'



function Guajolo({ todos }) {
  return (
    <div>
      {!todos ? 'cargando...' :
        todos.map((todo, index) => {
          return (

            <div>


              <Link style={{ margin: '10px' }} to={`/Nada/${todo.id}`} key={todo.id} ><img src={todo.imagen} alt="" />
              </Link>

            </div>
          )

        })

      }
    </div>
  )
}

export default Guajolo;
