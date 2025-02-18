import { motion } from 'framer-motion'
import fadeIn from '../../../variants'

import './Marcas.scss'
import logoEconverse from '../../../assets/Logo.svg'

const Marcas = () => {
  return(
    <motion.section
      className='marcas'
      variants={fadeIn("", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: true}}
    >
      <div className="marcas__interno">
        <h1 className='marcas__titulo'>Navegue por marcas</h1>
        <motion.ul
          className='marcas__lista'
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false}}
        >
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
        </motion.ul>
      </div>
    </motion.section>
  )
}

export default Marcas