
import './InternoPrimario.scss'

import logo from '../../../assets/Logo.svg'
import entregas from '../../../assets/entregas.svg'
import favoritos from '../../../assets/favoritos.svg'
import perfil from '../../../assets/perfil.svg'
import carrinho from '../../../assets/carrinho.svg'
import hamburguer from '../../../assets/hamburguer.svg'
import BuscaToggle from '../BuscaToggle/BuscaToggle'
import Busca from '../Busca/Busca'

const InternoPrimario = () => {
  return(
    <section className="interno-primario">
      <img className='interno-primario__logo' src={logo} alt="Logo da empresa EConverse" />
      <Busca />
      <nav className='interno-primario__navegacao'>
        <ul className='interno-primario__lista-mobile'>
          <li className='interno-primario__item'>
            <BuscaToggle />
          </li>
          <li className='interno-primario__item'>
            <img src={hamburguer} alt="Imagem representando ícone de menu." />
          </li>
        </ul>
        <ul className='interno-primario__lista'>
          <li className='interno-primario__item'>
            <img src={entregas} alt="" />
          </li>
          <li className='interno-primario__item'>
            <img src={favoritos} alt="" />
          </li>
          <li className='interno-primario__item'>
            <img src={perfil} alt="" />
          </li>
          <li className='interno-primario__item'>
            <img src={carrinho} alt="" />
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default InternoPrimario