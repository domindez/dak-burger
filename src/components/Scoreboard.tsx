// Scoreboard.jsx
import React from 'react'
import '../styles/Scoreboard.scss'
import Marquee from './Marquee'
import { Rocket } from 'lucide-react'

const Scoreboard = () => {
  return (
    <div className='scoreboard'>
      <div className='marquee'>
        <Marquee autoFill speed={100}>

          <p> SEGUNDA MEJOR BURGER DE EUROPA 2024 <Rocket /></p>
          <p className='odd'>TERCERA MEJOR BURGER DE ESPAÑA  2024 <Rocket /></p>
          <p>MEJOR BURGER DE MÁLAGA 2024 <Rocket /></p>
        </Marquee>
      </div>
    </div>
  )
}

export default Scoreboard
