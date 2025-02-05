import React, { useState } from 'react';
import produtosDados from '../../../utils/produtos.json';
import './Produtos.scss';
import setaEsquerda from '../../../assets/setaEsquerda.svg'
import setaDireita from '../../../assets/setaDireita.svg'
import listaCategorias from '../../../utils/listaCategorias'

interface ProdutosProps {
  mostrarCategorias?: boolean;
}

const Produtos: React.FC<ProdutosProps> = ({ mostrarCategorias = true, ...props }) => {
  const [produtos, setProdutos] = useState<typeof produtosDados.products>(produtosDados.products)
  const categoriasProdutos = listaCategorias[0].produtosRelacionados

  return (
    <div className='produtos'>
      <h2 className='produtos__titulo'>Produtos relacionados</h2>
      <ul className='produtos__categorias' data-mostrar-categorias={mostrarCategorias}>
        {mostrarCategorias === true && (
          categoriasProdutos.map((categoria) => {
            return(
              <li className={`produtos__categorias__item produtos__categorias__${categoria.toLocaleLowerCase()}`} key={categoria}>{categoria}</li>
            )
          })
        )}
        {mostrarCategorias === false && (
          <li className='produtos__categorias__item'>Ver todos</li>
        )}
      </ul>
      <div className='produtos__seta-esquerda'>
        <img src={setaEsquerda} alt="Imagem de seta à esquerda" />
      </div>
      <ul className="produtos__lista">
        {produtos.map((produto) => (
          <li key={produto.id} className="produtos__item">
            <img className="produtos__imagem" src={produto.photo} alt={produto.productName} />
            <p className="produtos__descricao">{produto.descriptionShort}</p>
            <div className="produtos__informacoes">
              <span className="produtos__de">De R$ {produto.price * 1.5},00</span>
              <span className="produtos__por">Por R$ {produto.price},00</span>
              <span className="produtos__pagamento">ou 2x de R$ {produto.price / 2},00 sem juros</span>
              <span className="produtos__frete">Frete grátis</span>
            </div>
            <button className="produtos__botao-comprar">Comprar</button>
          </li>
        ))}
      </ul>
      <div className='produtos__seta-direita'>
        <img src={setaDireita} alt="Imagem de seta à direita" />
      </div>
    </div>
  );
};

export default Produtos;