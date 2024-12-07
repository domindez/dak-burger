import Image from 'next/image'
import '../../../styles/AboutUs.scss'
import { roboto } from '@/app/fonts/fonts'

const AboutUs = () => {
  return (
    <div className='about-us'>
      <Image src='/gallery/burger2.jpg' width={1000} height={600} alt='about us dak burger' />

      <h2>Conoce nuestra historia</h2>
      <p className={roboto.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ducimus quisquam porro officiis labore aut reprehenderit libero, laborum magnam quidem soluta architecto laudantium asperiores, voluptas autem. Consectetur itaque sequi deserunt?</p>
    </div>
  )
}
export default AboutUs
