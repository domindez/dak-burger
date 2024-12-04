import { ReactNode } from 'react'
import '../styles/NavBoxSlider.scss'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const Slide = ({ children }: { children: ReactNode }) => {
  return (
    <div className='slide'>
      {children}
    </div>
  )
}

const NavBoxSlider = () => {
  return (
    <div className='nav-box-slider'>

      <div className='slider'>
        <Slide>
          <a href='#'>
            <div className='image-container'>
              <Image src='/gallery/burger2.jpg' width={300} height={300} alt='menu img' />
            </div>
            <p><ArrowUpRight /> FROM MALAGA TO THE WORLD</p>
          </a>
        </Slide>
        <Slide>
          <a href='#'>
            <div className='image-container'>
              <Image src='/gallery/burger1.jpg' width={300} height={300} alt='menu img' />
            </div>
            <p><ArrowUpRight /> NUESTRA CARTA</p>
          </a>
        </Slide>
        <Slide>
          <a href='#'>
            <div className='image-container'>
              <Image src='/gallery/burger3.jpg' width={300} height={300} alt='menu img' />
            </div>
            <p><ArrowUpRight /> SIGUENOS EN REDES</p>
          </a>
        </Slide>
        <Slide>
          <a href='#'>
            <div className='image-container'>
              <Image src='/gallery/burger1.jpg' width={300} height={300} alt='menu img' />
            </div>
            <p><ArrowUpRight /> ESTAMOS EN MALAGA CAPITAL CON BSMASH </p>
          </a>
        </Slide>
      </div>

    </div>
  )
}

export default NavBoxSlider
