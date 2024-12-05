'use client'

// components/Header.jsx
import { useState } from 'react'
import Image from 'next/image'
import '../styles/Header.scss'
import Link from 'next/link'
import { soccerLeague } from '@/app/fonts/fonts'
import { Rocket } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className='header'>
        <Image
          src='/logo-horizontal.svg'
          alt='logo dak burger'
          height={200}
          width={600}
          priority
        />
        <div className='action-btns hide-mb'>
          <a href='#'>Pedir</a>
          <a href='#'>Reservar</a>
        </div>
        <button className='toggleButton' onClick={toggleMenu} aria-label='Toggle menu'>
          <Image src='/astronaut.svg' alt='toggle menu' width={40} height={40} />
        </button>
        <nav style={soccerLeague.style} className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Rocket className='close' onClick={closeMenu} />
          <ul>
            <li><Link href='/' onClick={closeMenu}>Inicio</Link></li>
            <li><Link href='/menu' onClick={closeMenu}>Menu</Link></li>
            <li><Link href='/about-us' onClick={closeMenu}>Sobre Nosotros</Link></li>
            <li><Link href='#contacto' onClick={closeMenu}>Contacto</Link></li>
            <li><Link href='#' onClick={closeMenu}>Pide a domicilio</Link></li>
            <li><Link href='#' onClick={closeMenu}>Reserva</Link></li>
          </ul>
        </nav>
      </header>
      <div className='action-btns hide-pc'>
        <a href='#'>Pedir</a>
        <a href='#'>Reservar</a>
      </div>
    </>
  )
}

export default Header
