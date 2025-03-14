import { motion } from 'framer-motion'
import fadeIn from '../../../variants'

import './Banner.scss'

const Banner = () => {
  return(
    <motion.section
      className="banner"
      variants={fadeIn("", 0.9)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: true}}
    >
      <div className="banner__fundo">
        <div className="banner__interno">
          <div className="banner__textos">
            <h1 className='banner__titulo'>Venha conhecer nossas<br/>promoções</h1>
            <p className='banner__texto'><span>50% Off</span> nos produtos </p>
          </div>
          <button className="banner__botao">Ver produtos</button>
        </div>
      </div>
    </motion.section>
  )
}

export default Banner