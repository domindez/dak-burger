import React from 'react'
import '../styles/Hero.scss'
import ArrowToScroll from './ArrowToScroll'

const Hero = () => {
  return (
    <section className='hero'>
      <video className='hero-video' autoPlay loop muted playsInline>
        <source src='/DAK-BURGER-VIDEO-LANDING-HERO.mp4' type='video/mp4' />
      </video>
      <div className='hero-overlay' />
      <div className='hero-content'>
        {/* <p>Sabor americano en la costa del sol</p> */}
        <div className='buttons-container'>
          <a href='#' className='cta-button'>Pide a domicilio</a>
          <a href='#' className='cta-button'>Reserva</a>
        </div>
      </div>
      <ArrowToScroll />
    </section>
  )
}

export default Hero
