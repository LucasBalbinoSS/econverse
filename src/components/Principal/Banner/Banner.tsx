import './Banner.scss'

const Banner = () => {
  return(
    <section className="banner">
      <div className="banner__fundo">
        <div className="banner__interno">
          <div className="banner__textos">
            <h1 className='banner__titulo'>Venha conhecer nossas<br/>promoções</h1>
            <p className='banner__texto'><span>50% Off</span> nos produtos </p>
          </div>
          <button className="banner__botao">Ver produto</button>
        </div>
      </div>
    </section>
  )
}

export default Banner