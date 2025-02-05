import './Busca.scss'
import busca from '../../../assets/busca.svg'

const Busca = () => {
  return(
    <form className='busca'>
      <input placeholder='O que você está buscando?' className='busca__campo' type="text" name="busca" id="busca" />
      <button className='busca__botao'>
        <img src={busca} alt="Imagem representando a busca." />
      </button>
    </form>
  )
}

export default Busca