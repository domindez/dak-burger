'use client'

// components/Header.jsx
import { useState, useEffect } from 'react'
import Image from 'next/image'
import '../styles/Header.scss'
import Link from 'next/link'
import { soccerLeague } from '@/app/fonts/fonts'
import { Rocket } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Puedes ajustar este valor según tus necesidades
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <Link href='/'>
          <Image
            src='/logo-dak-nasa.png'
            alt='logo dak burger'
            height={200}
            width={600}
            priority
          />
        </Link>
        <div className='right-btns'>
          <div className='action-btns'>
            <a target='_blank' href='https://dakburgerlacalademijas.order.app.hd.digital/menus'>Pedir</a>
            <Link href='/reserva'>Reservar</Link>
          </div>
          <button className='toggleButton' onClick={toggleMenu} aria-label='Toggle menu'>
            <Image src='/astronaut.svg' alt='toggle menu' width={40} height={40} />
          </button>
        </div>
        <nav style={soccerLeague.style} className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Rocket className='close' onClick={closeMenu} />
          <ul>
            <li><Link href='/' onClick={closeMenu}>Inicio</Link></li>
            <li><Link href='/menu' onClick={closeMenu}>Menu</Link></li>
            <li><Link href='/conocenos' onClick={closeMenu}>Sobre Nosotros</Link></li>
            <li><a target='_blank' href='https://dakburgerlacalademijas.order.app.hd.digital/menus' onClick={closeMenu}>Pide a domicilio</a></li>
            <li><Link href='/reserva' onClick={closeMenu}>Reserva</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
