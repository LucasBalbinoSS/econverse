import './Marcas.scss'
import logoEconverse from '../../../assets/Logo.svg'

const Marcas = () => {
  return(
    <section className='marcas'>
      <div className="marcas__interno">
        <h1 className='marcas__titulo'>Navegue por marcas</h1>
        <ul className='marcas__lista'>
          <li className='marcas__lista__item'>
            <img src={logoEconverse} alt="Marca Econverse." />
          </li>
          <li className='marcas__lista__item'>
            <img src={logoEconverse} alt="Marca Econverse." />
          </li>
          <li className='marcas__lista__item'>
            <img src={logoEconverse} alt="Marca Econverse." />
          </li>
          <li className='marcas__lista__item'>
            <img src={logoEconverse} alt="Marca Econverse." />
          </li>
          <li className='marcas__lista__item'>
            <img src={logoEconverse} alt="Marca Econverse." />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Marcas