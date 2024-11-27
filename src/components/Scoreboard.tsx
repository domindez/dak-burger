// Scoreboard.jsx
import React from 'react'
import '../styles/Scoreboard.scss'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

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
        <div className='marquee__inner'>
          <Marquee gradient gradientWidth={75}>

            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className='logo'
                width={200}
                height={100}
                priority
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default Scoreboard
