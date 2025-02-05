import Banner from './Banner/Banner'
import Categorias from './Categorias/Categorias'
import './Principal.scss'
import Produtos from './Produtos/Produtos'
import Parceiros from './Parceiros/Parceiros'
import Marcas from './Marcas/Marcas'

const Principal = () => {
  return(
    <>
      <Banner />
      <Categorias />
      <Produtos mostrarCategorias={true} />
      <Parceiros />
      <Produtos mostrarCategorias={false} />
      <Parceiros />
      <Marcas />
      <Produtos mostrarCategorias={false} />
    </>
  )
}

export default Principal