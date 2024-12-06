import { roboto } from '@/app/fonts/fonts'
import '../styles/ChampionSection.scss'
import Image from 'next/image'

const ChampionSection = () => {
  return (
    <div className='champion-section'>
      <h2>Estamos en la Champion Burger</h2>
      <div className='image'>
        <Image className='champion-burger' src='/burger.png' height={600} width={600} alt='champion burger dak' />
      </div>
      <p className={roboto.className}>Lorem fistrum fistro amatomaa está la cosa muy malar condemor ese que llega pecador. Jarl ese que llega te voy a borrar el cerito ese pedazo de. Va usté muy cargadoo jarl ese que llega te va a hasé pupitaa me cago en tus muelas a peich fistro al ataquerl está la cosa muy malar de la pradera.</p>
    </div>
  )
}
export default ChampionSection
