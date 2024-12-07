// components/Footer.jsx

import React from 'react'
import { SiFacebook, SiX, SiInstagram, SiLinkedin } from 'react-icons/si'
import Link from 'next/link'
import Image from 'next/image'
import '../styles/footer.scss' // Asegúrate de que la ruta sea correcta

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        {/* Primera Columna: Logo y Redes Sociales */}
        <div className='footer__column footer__column--logo'>
          <div className='footer__logo'>
            <Image src='/logo-horizontal.svg' alt='Logo' width={200} height={100} />
          </div>
          <div className='footer__socialMedia'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
              className='footer__socialLink'
            >
              <SiFacebook />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
              className='footer__socialLink'
            >
              <SiX />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              className='footer__socialLink'
            >
              <SiInstagram />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='footer__socialLink'
            >
              <SiLinkedin />
            </a>
          </div>
        </div>

        {/* Segunda Columna: Enlaces de Navegación */}
        <div className='footer__column footer__column--nav'>
          <h3 className='footer__heading'>Navegación</h3>
          <ul className='footer__list'>
            <li>
              <Link href='/'>Inicio</Link>
            </li>
            <li>
              <Link href='/conocenos'>Conócenos</Link>
            </li>
            <li>
              <Link href='/reserva'>Reserva</Link>
            </li>
            <li>
              <a href='https://dakburgerlacalademijas.order.app.hd.digital/menus'>Pide a domicilio</a>
            </li>
          </ul>
        </div>

        {/* Tercera Columna: Enlaces Legales */}
        <div className='footer__column footer__column--legal'>
          <h3 className='footer__heading'>Legales</h3>
          <ul className='footer__list'>
            <li>
              <Link href='/cookies'>Política de Privacidad</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__copy'>
        &copy; {new Date().getFullYear()} DAK BURGER
        <br />
        <br />
        Web with ❤ by <a href='https://trivify.es'>Trivify</a>
      </div>
    </footer>
  )
}

export default Footer
