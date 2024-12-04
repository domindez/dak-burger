'use client'

// components/Header.jsx
import { useState } from 'react'
import Image from 'next/image'
import '../styles/Header.scss'
import Link from 'next/link'
import { soccerLeague } from '@/app/fonts/fonts'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className='header'>
      <Image
        src='/logo-horizontal.svg'
        alt='logo dak burger'
        height={200}
        width={600}
        priority
        className='hide-mb'
      />
      <Image
        src='/burger-logo.svg'
        alt='logo dak burger'
        height={200}
        width={200}
        priority
        className='hide-pc'
      />
      <div className='action-btns'>
        <a href='#'>Pedir</a>
        <a href='#'>Reservar</a>
      </div>
      <button className='toggleButton' onClick={toggleMenu} aria-label='Toggle menu'>
        <Image src='/astronaut.svg' alt='toggle menu' width={40} height={40} />
      </button>
      <nav style={soccerLeague.style} className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link href='#inicio' onClick={closeMenu}>Inicio</Link></li>
          <li><Link href='#menu' onClick={closeMenu}>Menu</Link></li>
          <li><Link href='#sobre' onClick={closeMenu}>Sobre Nosotros</Link></li>
          <li><Link href='#contacto' onClick={closeMenu}>Contacto</Link></li>
          <li><Link href='#' onClick={closeMenu}>Pide a domicilio</Link></li>
          <li><Link href='#' onClick={closeMenu}>Reserva</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
