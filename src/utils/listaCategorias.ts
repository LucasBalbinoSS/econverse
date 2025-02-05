import computador from '../assets/computador.svg'
import supermercado from '../assets/supermercados.svg'
import bebida from '../assets/bebida.svg'
import ferramentas from '../assets/ferramentas.svg'
import saude from '../assets/saude.svg'
import esporte from '../assets/esporte.svg'
import moda from '../assets/moda.svg'

interface CategoriaPrincipal {
  id: number
  titulo: string
  icone: string
  alt: string
}

interface GrupoCategorias {
  topo: string[]
  principal: CategoriaPrincipal[]
  produtosRelacionados: string[]
}

const listaCategorias: GrupoCategorias[] = [
  {
    topo: [
      'Todas as categorias',
      'Supermercado',
      'Livros',
      'Lançamentos',
      'Ofertas do dia',
      'Assinatura'
    ],
    principal: [
      { id:1, titulo: 'Tecnologia', icone: computador, alt: 'Imagem de computador representando tecnologia.' },
      { id:2, titulo: 'Supermercado', icone: supermercado, alt: 'Imagem representando um supermercado.' },
      { id:3, titulo: 'Bebidas', icone: bebida, alt: 'Imagem representando uma bebida.' },
      { id:4, titulo: 'Ferramentas', icone: ferramentas, alt: 'Imagem representando uma ferramenta.' },
      { id:5, titulo: 'Saúde', icone: saude, alt: 'Imagem representando saúde.' },
      { id:6, titulo: 'Esportes e Fitness', icone: esporte, alt: 'Imagem representando esporte e fitness' },
      { id:7, titulo: 'Moda', icone: moda, alt: 'Imagem representando moda' },
    ],
    produtosRelacionados: [
      'Celular',
      'Acessórios',
      'Tablets',
      'Notebooks',
      'TVs',
      'Ver Todos'
    ]
  }
]

export default listaCategorias