import { motion } from 'framer-motion'
import fadeIn from '../../../variants'

// confetti
import Confetti from 'react-dom-confetti'

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
  mostrarCategorias?: boolean
}

const Produtos: React.FC<ProdutosProps> = ({ mostrarCategorias = true }) => {
  const [produtos] = useState<typeof produtosDados.products>(produtosDados.products)
  const [produtoSelecionado, setProdutoSelecionado] = useState<typeof produtosDados.products[0] | null>(null)
  const categoriasProdutos = listaCategorias[0].produtosRelacionados
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [count, setCount] = useState(1)
  const [showConfetti, setShowConfetti] = useState(false)

  const config = {
    angle: 193,
    spread: 360,
    startVelocity: 29,
    elementCount: 93,
    dragFriction: 0.12,
    duration: 3420,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  }

  function toggleDialog(produto: typeof produtosDados.products[0]) {
    setProdutoSelecionado(produto)
    console.log(produto)

    if (!dialogRef.current) {
      return
    }

    setCount(1)

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

  function handleComprar() {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 100)
  }

  return (
    <motion.div
      className='produtos'
      variants={fadeIn("", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: true}}
    >
      <h2 className='produtos__titulo'>Produtos relacionados</h2>
      <motion.ul
        className='produtos__categorias' data-mostrar-categorias={mostrarCategorias}
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true}}
      >
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
      </motion.ul>
      <div className='produtos__seta-esquerda'>
        <img src={setaEsquerda} alt="Imagem de seta à esquerda" />
      </div>
      <ul className="produtos__lista">
        {produtos.map((produto) => (
          <motion.li
          key={produto.id}
          className="produtos__item"
          variants={fadeIn("up", produto.id/5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false}}
      >
            <img className="produtos__imagem" src={produto.photo} alt={produto.productName} />
            <p className="produtos__descricao">{produto.descriptionShort}</p>
            <div className="produtos__informacoes">
              <span className="produtos__de">De R$ {produto.price * 1.5},00</span>
              <span className="produtos__por">Por R$ {produto.price},00</span>
              <span className="produtos__pagamento">ou 2x de R$ {produto.price / 2},00 sem juros</span>
              <span className="produtos__frete">Frete grátis</span>
            </div>
            <button onClick={() => toggleDialog(produto)} className="produtos__botao-comprar">Comprar</button>
            <dialog className="modal" ref={dialogRef}>
            {produtoSelecionado && (
              <div className="modal__interno">
                <img onClick={() => toggleDialog(produto)} className='modal__interno__fechar' src={fechar} alt="Ícone de x para fechar o modal." />
                <div>
                  <img className='modal__interno__imagem' src={produtoSelecionado.photo} alt={produtoSelecionado.productName} />
                </div>
                <div className="modal__interno__info">
                  <h2 className='modal__interno__titulo'>{produtoSelecionado.productName}</h2>
                  <span className='modal__interno__preco'>R$ {produtoSelecionado.price},00</span>
                  <p className='modal__interno__descricao'>Many desktop publishing packages and web page<br/>editors now many desktop publishing.</p>
                  <span className='modal__interno__detalhes'>Veja mais detalhes do produto &gt;</span>
                  <div className="modal__interno__compra">
                    <div className='modal__interno__compra__quantidade'>
                      <img onClick={minusCount} className='modal__interno__compra__quantidade__menos' src={menos} alt="Ícone de menos" />
                      <span className='modal__interno__compra__quantidade__contador'>{count}</span>
                      <img onClick={plusCount} className='modal__interno__compra__quantidade__mais' src={mais} alt="Ícone de menos" />
                    </div>
                    <button onClick={handleComprar} className='modal__interno__compra__botao'>
                      Comprar
                      <Confetti config={config} active={showConfetti} />
                    </button>
                  </div>
                </div>
              </div>
            )}
            </dialog>
          </motion.li>
        ))}
      </ul>
      <div className='produtos__seta-direita'>
        <img src={setaDireita} alt="Imagem de seta à direita" />
      </div>
    </motion.div>
  )
}

export default Produtos