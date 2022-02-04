import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'



function Bebidas () {
  const url = 'https://sprintdos.herokuapp.com/bebidas/'
  const [todos1, setTodos1] = useState()
  const fetchApi = async() => {
      const response = await fetch(url)
      const responseJSON = await response.json()
      setTodos1(responseJSON)
  }
  useEffect(()=>{
      fetchApi()
  }, [])
  return (
    <div>
      {!todos1 ? 'cargando...' :
        todos1.map((todo1, index) => {
          return (

            <div>


              <Link style={{ margin: '10px' }} to={`/CarBebidas/${todo1.id}`} key={todo1.id} ><img src={todo1.imagen} alt="" />
              </Link>

            </div>
          )

        })

      }
    </div>
  )
}
export default Bebidas;
