import { BrowserRouter,Route, Routes } from "react-router-dom";
import Bebidas from '../containers/Bebidas';
import Guajolo from '../containers/Guajolo';
import Nada from '../containers/Nada';
import Tamales from '../containers/Tamales';
import Todo from '../containers/Todo';
import Car from '../containers/Car';

const AppRouters = () => {
  //const [category, setCategory] = useState("");
  /*const url = 'https://sprintdos.herokuapp.com/guapjolotas/'
  //const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
​
    
  }
​
  useEffect(() => {
    fetchApi()
  }, [])*/

  return (
    <BrowserRouter>
    <Todo />
      <Routes>
        <Route path={`/Nada/:id/:categoria`} element={<Nada/>} />
        <Route path="/Guajolo" element={<Guajolo />} />
        <Route path="/Bebidas" element={<Bebidas  />} />
        <Route path="/Tamales" element={<Tamales />} />
        <Route path="/Car" element={<Car />}/>
        
        
      </Routes>
    </BrowserRouter>
  )
};

export default AppRouters;