import { motion } from 'framer-motion'
import fadeIn from '../../../../variants'

import './Parceiro.scss'

const Parceiro = () => {
  return(
    <motion.div
      className='parceiro'
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: true}}
    >
      <div className='parceiro__fundo'>
        <h2 className='parceiro__titulo'>Parceiros</h2>
        <p className='parceiro__texto'>Lorem ipsum dolor sit<br/>amet, consectetur</p>
        <button className='parceiro__botao'>Confira</button>
      </div>
    </motion.div>
  )
}

export default Parceiro