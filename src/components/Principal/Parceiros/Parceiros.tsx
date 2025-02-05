import Parceiro from './Parceiro/Parceiro'
import './Parceiros.scss'

const Parceiros = () => {
  return(
    <section className='parceiros'>
      <div className='parceiros__interno'>
        <Parceiro />
        <Parceiro />
      </div>
    </section>
  )
}

export default Parceiros