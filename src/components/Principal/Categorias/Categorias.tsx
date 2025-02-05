import './Categorias.scss'
import listaCategorias from '../../../utils/listaCategorias'

const Categorias = () => {

  const categoriasPrincipal = listaCategorias[0].principal

  return(
    <ul className='categorias-principal'>
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
    </ul>
  )
}

export default Categorias