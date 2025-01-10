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

          <p>GANADORES SHOWDOWN 2025 <Rocket /></p>
          <p className='odd'>TOP10 MEJORES BURGERS DE ESPANA <Rocket /></p>
          <p>TERCERA MEJOR HAMBURGUESA DE ESPANA CHAMPIONS BURGER <Rocket /></p>

        </Marquee>
      </div>
    </div>
  )
}

export default Scoreboard
