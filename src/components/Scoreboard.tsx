import React from 'react'
import '../styles/Scoreboard.scss'
import Image from 'next/image'

const logos = [
  '/scoreboard/barmanager-logo.svg',
  '/scoreboard/barmanager-logo.svg',
  '/scoreboard/barmanager-logo.svg',
  '/scoreboard/barmanager-logo.svg'

]

const Scoreboard = () => {
  return (
    <div className='scoreboard'>
      <div className='marquee'>
        {logos.map((logo, index) => (
          <Image key={index} src={logo} alt={`Logo ${index + 1}`} className='logo' width={200} height={100} />
        ))}
        {/* Duplicamos los logos para que el efecto sea continuo */}
        {logos.map((logo, index) => (
          <Image key={`duplicate-${index}`} src={logo} alt={`Logo ${index + 1}`} width={200} height={100} className='logo' />
        ))}
      </div>
    </div>
  )
}

export default Scoreboard
