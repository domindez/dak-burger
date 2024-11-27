'use client'

// components/Header.jsx
import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import '../styles/Header.scss'
import Link from 'next/link'
import { soccerLeague } from '@/fonts'

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
      <div className='logo'>
        <Image
          src='/logo-horizontal.svg'
          alt='logo dak burger'
          height={100}
          width={600}
          style={{ width: 'auto' }}
        />
      </div>
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
      <button className={` toggleButton ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label='Toggle menu'>
        {isMenuOpen
          ? <X size={35} />
          : <Menu size={40} color='white' />}
        {/* <Image src='/burger-solid.svg' width={35} height={35} alt='toggle menu' />} */}
      </button>
    </header>
  )
}

export default Header
