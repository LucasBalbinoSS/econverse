import { motion } from 'framer-motion'
import fadeIn from '../../../variants'

import './Categorias.scss'
import listaCategorias from '../../../utils/listaCategorias'

const Categorias = () => {

  const categoriasPrincipal = listaCategorias[0].principal

  return(
    <motion.ul
      className='categorias-principal'
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: true}}
    >
      {categoriasPrincipal.map((categoria) => {
        return(
          <li className={`categorias-principal__item categorias-principal__item-${categoria.titulo.toLowerCase()}`} key={categoria.id}>
            <div>
              <img src={categoria.icone} alt={categoria.alt} />
            </div>
            <span className='categorias-principal__nome'>
              {categoria.titulo}
            </span>
          </li>
        )
      })}
    </motion.ul>
  )
}

export default Categorias