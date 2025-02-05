import './BuscaToggle.scss'

import busca from '../../../assets/busca.svg'

const BuscaToggle = () => {
  return(
    <form className='busca-toggle'>
      <label htmlFor="busca-toggle">
        <img src={busca} alt="Imagem representando a busca." />
      </label>
      <input type="checkbox" name="busca-toggle" id="busca-toggle" />
      <div className='busca-toggle__container-campos'>
        <input placeholder='O que você está buscando?' className='busca-toggle__campo' type="text" name="busca" id="busca" />
        <button className='busca-toggle__botao'>
          <img src={busca} alt="Imagem representando a busca." />
        </button>
      </div>
    </form>
  )
}

export default BuscaToggle