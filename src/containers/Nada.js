
import { ButtonAgregar, BebidasA, DivB, DivS, H2S,H5, Imgsa, H3, ImgCard } from '../styles/NadaStyles'
import { useParams } from 'react-router-dom';




function Nada({ todos }) {

  const { id } = useParams()
  const producto = todos.find((product) => product.id === Number(id))
  const { imagen, precio,nombre } = producto


  return <div>
    <ImgCard src={imagen} alt="" />
    <H3>{nombre}</H3>
    <H3>${precio}</H3>
    
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

    <ButtonAgregar >Agregar al Carrito</ButtonAgregar>
  </div>;




};

export default Nada;
