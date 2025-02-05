import './/topo.scss'
import InternoPrimario from "./InternoPrimario/InternoPrimario"
import AvisoAlternado from "./AvisoAlternado/AvisoAlternado"
import Categorias from './Categorias/Categorias'

const Header = () => {
  return(
    <header className='topo'>
      <AvisoAlternado />
      <InternoPrimario />
      <Categorias />
    </header>
  )
}

export default Header