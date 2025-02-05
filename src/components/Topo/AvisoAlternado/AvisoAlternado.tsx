import './AvisoAlternado.scss'

import compraSegura from '../../../assets/compraSegura.svg'
import freteGratis from '../../../assets/freteGratis.svg'
import comprasParceladas from '../../../assets/comprasParceladas.svg'

const AvisoAlternado = () => {
  return(
    <section className='aviso'>
      <div className="aviso__interno">
        <ul className='aviso__lista'>
          <li className='aviso__item aviso__item__1'>
            <img className='aviso__icone' src={compraSegura} alt="Imagem de Escudo simbolizando segurança na compra." />
            <span>Compra <span className='aviso__bold'>100% segura</span></span>
          </li>
          <li className='aviso__item aviso__item__2'>
            <img className='aviso__icone' src={freteGratis} alt="Imagem de caminhão simbolizando frete grátis." />
            <span><span className='aviso__bold'>Frete grátis</span> acima de R$200</span>
          </li>
          <li className='aviso__item aviso__item__3'>
            <img className='aviso__icone' src={comprasParceladas} alt="Imagem de cartão simbolizando compras parceladas." />
            <span><span className='aviso__bold'>Parcele</span> suas compras</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AvisoAlternado