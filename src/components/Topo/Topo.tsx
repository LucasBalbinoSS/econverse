import { motion } from 'framer-motion'
import fadeIn from '../../variants'

import './/topo.scss'
import InternoPrimario from "./InternoPrimario/InternoPrimario"
import AvisoAlternado from "./AvisoAlternado/AvisoAlternado"
import Categorias from './Categorias/Categorias'

const Header = () => {
  return(
    <motion.header
      className='topo'
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: true}}
    >
      <AvisoAlternado />
      <InternoPrimario />
      <Categorias />
    </motion.header>
  )
}

export default Header