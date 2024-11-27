import Image from 'next/image'
import '../styles/Burger.scss'
import { roboto } from '@/app/fonts/fonts'

const BurgerSection = () => {
  return (
    <div className='burger-section' id='burger'>
      <div className='image'>
        <Image src='/burger.png' height={300} width={300} alt='burger' />
      </div>
      <div className='info'>
        <h2>La burger mas burger de todas las burgers</h2>
        <p style={roboto.style}>Tenemos la burger más burber de todas las burgers, es una cosa de locos, vamos. Si quieres comerte una burger que sepa a burger más que ninguna burger, ven y prueba nuestra burger.</p>
      </div>
    </div>
  )
}
export default BurgerSection
