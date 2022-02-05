
import { BebidasA, DivB, DivS, H2S,H5, Imgsa, H3, ImgCard } from '../styles/NadaStyles'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';




const Nada =() =>{

  const [todos, setTodos] = useState([])
  const [producto, setProducto] = useState({});
  

  //recibimos id y categoria por la url
  const { id, categoria } = useParams()
  const url = 'https://sprintdos.herokuapp.com/'
  


  const fetchApi = async (  ) => {
    const response = await fetch(url + categoria)
    const responseJSON = await response.json()
    return responseJSON
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filtro = ( id ) => {
    setProducto(todos?.find( Element => Element.id === Number(id)))
    
  }
  //montamos el comoponente y hacemos la peticion segun la cateoria que recibimos en la url
  useEffect(() => {
    console.log("montado")
    fetchApi(url+categoria).then(resp => setTodos(resp))
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  //montamos de nuevo el componente para poder usar el estado actualizado de la peticion fetch
  useEffect(() => {
    console.log("montado2")
    filtro(id);
    console.log(producto);
    
  }, [filtro, id, producto, todos]);
  
  return <div>
      
      <ImgCard src={producto?.imagen} alt={producto?.name} />
      <H3>{producto?.nombre}</H3>
      <H3>${producto?.precio}</H3>
    
    <DivS>
      <H2S>Sabores</H2S>
      
      <H5>Guajolotas y Tamales</H5>
      <a href="/"><Imgsa src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1642872568/rajas_j83sxw.png" alt="" width="80px" /></a>
      <a href="/"><Imgsa src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1642872568/verde_ucoj5k.png" alt="" width="80px" /></a>
      <a href="/"><Imgsa src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1642872568/pi%C3%B1a_znrls1.png" alt="" width="80px" /></a>
      <a href="/"><Imgsa src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1642872568/mole_uyzbg8.png" alt="" width="80px" /></a>
      <a href="/"><Imgsa src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1642872568/guayaba_pskalt.png" alt="" width="80px" /></a>
      <a href="/"><Imgsa src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1642872568/pasas_p963rg.png" alt="" width="80px" /></a>

      <H5>Bedidas</H5>
      <a href="/"><Imgsa src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1642872568/arrozconleche_js8xkn.png" alt="" width="80px" /></a>
      <a href="/"><Imgsa src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1642872568/sabor_champurrado_hfgbrf.png" alt="" width="80px" /></a>
      <a href="/"><Imgsa src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1642872568/sabor_chocolate_vluo8l.png" alt="" width="80px" /></a>
      <a href="/"><Imgsa src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1642872568/saborcafe_kwoq9x.png" alt="" width="80px" /></a>
    </DivS>

    <div>
      <H2S>Guajolocombo</H2S>
      <p>Selecciona la bebida que mas te guste y disfruta tu desayuno </p>
        <DivB>
          <BebidasA src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1643602394/champurrado1_omd42k.png" alt="" />
          <input type="checkbox"></input>
        </DivB>
        <DivB>
          <BebidasA src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1643602394/atoledearroz_vexpk2.png" alt="" />
          <input type="checkbox"></input>
        </DivB>
        <DivB>
          <BebidasA src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1643602394/chocolate_caliente_uxehsy.png" alt="" />
          <input type="checkbox"></input>
        </DivB >
        <DivB>
          <BebidasA src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1643602394/cafenegro_qbtjt3.png" alt="" />
          <input type="checkbox"></input>
        </DivB>
    </div>

    <div class="buttom">
  <button class="btn"> Añadir al carrito</button>
</div>  
</div>;




};

export default Nada;
