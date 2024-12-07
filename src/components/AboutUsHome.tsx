import { roboto } from '@/app/fonts/fonts'
import '../styles/InfoSection.scss'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const AboutUsHome = () => {
  return (
    <>
      <div className='info-section'>
        <Image className='logo-in-about' src='/logo-horizontal.svg' height={300} width={600} alt='logo dak burger' />
        <div className='info'>
          <h2>Como empezo todo</h2>
          <p className={roboto.className}>Lorem fistrum fistro amatomaa está la cosa muy malar condemor ese que llega pecador. Jarl ese que llega te voy a borrar el cerito ese pedazo de. Va usté muy cargadoo jarl ese que llega te va a hasé pupitaa me cago en tus muelas a peich fistro al ataquerl está la cosa muy malar de la pradera.</p>
          <Link href='/about-us'>Sigue leyendo <ArrowUpRight /> </Link>
        </div>
      </div>
    </>

  )
}
export default AboutUsHome
