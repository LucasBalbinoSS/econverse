import React, { useState, useRef } from 'react'
import produtosDados from '../../../utils/produtos.json'
import './Produtos.scss'
import setaEsquerda from '../../../assets/setaEsquerda.svg'
import setaDireita from '../../../assets/setaDireita.svg'
import menos from '../../../assets/menos.svg'
import mais from '../../../assets/mais.svg'
import fechar from '../../../assets/fechar.svg'
import listaCategorias from '../../../utils/listaCategorias'

interface ProdutosProps {
  mostrarCategorias?: boolean;
}

const Produtos: React.FC<ProdutosProps> = ({ mostrarCategorias = true }) => {
  const [produtos] = useState<typeof produtosDados.products>(produtosDados.products)
  const categoriasProdutos = listaCategorias[0].produtosRelacionados
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [count, setCount] = useState(1)

  function toggleDialog() {
    if (!dialogRef.current) {
      return
    }

    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal()
  }

  function plusCount() {
    setCount(count + 1)
  }
  
  function minusCount() {
    if (count == 1) {
      return
    }

    setCount(count - 1)
  }

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
            <button onClick={toggleDialog} className="produtos__botao-comprar">Comprar</button>
            <dialog className="modal" ref={dialogRef}>
              <div className="modal__interno">
                <img onClick={toggleDialog} className='modal__interno__fechar' src={fechar} alt="Ícone de x para fechar o modal." />
                <div>
                  <img className='modal__interno__imagem' src={produto.photo} alt={produto.productName} />
                </div>
                <div className="modal__interno__info">
                  <h2 className='modal__interno__titulo'>{produto.productName}</h2>
                  <span className='modal__interno__preco'>R$ {produto.price},00</span>
                  <p className='modal__interno__descricao'>Many desktop publishing packages and web page<br/>editors now many desktop publishing.</p>
                  <span className='modal__interno__detalhes'>Veja mais detalhes do produto &gt;</span>
                  <div className="modal__interno__compra">
                    <div className='modal__interno__compra__quantidade'>
                      <img onClick={minusCount} className='modal__interno__compra__quantidade__menos' src={menos} alt="Ícone de menos" />
                      <span className='modal__interno__compra__quantidade__contador'>{count}</span>
                      <img onClick={plusCount} className='modal__interno__compra__quantidade__mais' src={mais} alt="Ícone de menos" />
                    </div>
                    <button className='modal__interno__compra__botao'>Comprar</button>
                  </div>
                </div>
              </div>
            </dialog>
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