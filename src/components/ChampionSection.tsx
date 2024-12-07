import { roboto } from '@/app/fonts/fonts'
import '../styles/ChampionSection.scss'
import Image from 'next/image'

const ChampionSection = () => {
  return (
    <div className='champion-section'>
      <h2 className='champion-tittle-mb hide-pc'>Estamos en la Champion Burger</h2>
      <div className='image'>
        <Image className='champion-burger' src='/burger.png' height={600} width={600} alt='champion burger dak' />
      </div>
      <div className='info'>
        <h2 className='hide-mb'>Estamos en la Champion Burger</h2>
        <p className={roboto.className}>Lorem fistrum fistro amatomaa está la cosa muy malar condemor ese que llega pecador. Jarl ese que llega te voy a borrar el cerito ese pedazo de. Va usté muy cargadoo jarl ese que llega te va a hasé pupitaa me cago en tus muelas.</p>
      </div>
    </div>
  )
}
export default ChampionSection
