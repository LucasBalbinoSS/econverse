import './Rodape.scss'
import logoEconverse from '../../assets/Logo.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'

const Rodape = () => {
  return(
    <footer className='rodape'>
      <div className="rodape__limite-1">
        <div className='rodape__interno-1'>
          <div className='rodape__interno-1__textos-newsletter'>
            <h2 className='rodape__interno-1__textos-newsletter__titulo'>Inscreva-se na nossa newsletter</h2>
            <p className='rodape__interno-1__textos-newsletter__texto'>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos <br/>da Econverse.</p>
          </div>
          <form className='rodape__interno-1__formulario'>
            <div className="rodape__interno-1__formulario__container-campos">
              <input type="text" name="nome" id="nome" placeholder='Digite seu nome' required />
              <input type="email" name="email" id="email" placeholder='Digite seu e-mail' required />
              <button>Inscrever</button>
            </div>
            <div className='rodape__interno-1__formulario__container-termos'>
              <input type="checkbox" name="termos" id="termos" required />
              <label htmlFor="termos">Aceito os termos e condições</label>
            </div>
          </form>
        </div>
      </div>
      <div className="rodape__limite-2">
        <div className='rodape__interno-2'>
          <div className='rodape__interno-2__informacoes'>
            <img className='rodape__interno-2__informacoes__logo' src={logoEconverse} alt="Logo da empresa EConverse." />
            <p>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit.</p>
            <ul className='rodape__interno-2__informacoes__sociais'>
              <li>
                <img src={instagram} alt="Logo da rede social Instagram." />
              </li>
              <li>
                <img src={facebook} alt="Logo da rede social Facebook." />
              </li>
              <li>
                <img src={linkedin} alt="Logo da rede social LinkedIn." />
              </li>
            </ul>
          </div>
          <div className='rodape__interno-2__divisor'></div>
          <div className='rodape__interno-2__menus'>
            <div className='rodape__interno-2__menus__menu'>
              <h2>Institucional</h2>
              <nav>
                <ul>
                  <li>Sobre nós</li>
                  <li>Movimento</li>
                  <li>Trabalhe conosco</li>
                </ul>
              </nav>
            </div>
            <div className='rodape__interno-2__menus__menu'>
              <h2>Ajuda</h2>
              <nav>
                <ul>
                  <li>Suporte</li>
                  <li>Fale conosco</li>
                  <li>Perguntas frequentes</li>
                </ul>
              </nav>
            </div>
            <div className='rodape__interno-2__menus__menu'>
              <h2>Termos</h2>
              <nav>
                <ul>
                  <li>Termos e condições</li>
                  <li>Política de privacidade</li>
                  <li>Troca e devolução</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="rodape__limite-3">
        <div className='rodape__interno-3'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  )
}

export default Rodape