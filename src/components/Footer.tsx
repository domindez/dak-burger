// components/Footer.jsx

import React from 'react'
import { SiFacebook, SiInstagram } from 'react-icons/si'
import Link from 'next/link'
import Image from 'next/image'
import '../styles/footer.scss' // Asegúrate de que la ruta sea correcta

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__main'>
        <div className='footer__container'>
          {/* Primera Columna: Logo y Descripción */}
          <div className='footer__column footer__column--brand'>
            <div className='footer__logo'>
              <Image src='/logo-horizontal.svg' alt='DAK BURGER Logo' width={220} height={110} />
            </div>
            <p className='footer__description'>
              ᴡᴇ ᴍᴀᴋᴇ ᴛʜᴇ ʙᴜʀɢᴇʀs ᴡᴇ ᴀʟᴡᴀʏs ᴡᴀɴᴛᴇᴅ ᴛᴏ ᴇᴀᴛ.
            </p>
            <div className='footer__socialMedia'>
              <span className='footer__socialTitle'>Síguenos:</span>
              <div className='footer__socialLinks'>
                <a
                  href='https://www.facebook.com/dakburgers/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Facebook'
                  className='footer__socialLink'
                >
                  <SiFacebook />
                </a>
                <a
                  href='https://www.instagram.com/dak_burger/?hl=es'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Instagram'
                  className='footer__socialLink'
                >
                  <SiInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Segunda Columna: Enlaces de Navegación */}
          <div className='footer__column footer__column--nav'>
            <h3 className='footer__heading'>
              <span>Navegación</span>
            </h3>
            <ul className='footer__list'>
              <li>
                <Link href='/'>
                  <span className='footer__linkText'>Inicio</span>
                </Link>
              </li>
              <li>
                <Link href='/conocenos'>
                  <span className='footer__linkText'>Conócenos</span>
                </Link>
              </li>
              <li>
                <Link href='/reserva'>
                  <span className='footer__linkText'>Reserva</span>
                </Link>
              </li>
              <li>
                <Link href='/carta'>
                  <span className='footer__linkText'>Nuestra Carta</span>
                </Link>
              </li>
              <li>
                <a href='https://dakburgerlacalademijas.order.app.hd.digital/menus' target='_blank' rel='noopener noreferrer'>
                  <span className='footer__linkText'>Pide a Domicilio</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Tercera Columna: Información de Contacto */}
          <div className='footer__column footer__column--contact'>
            <h3 className='footer__heading'>
              <span>Contacto</span>
            </h3>
            <div className='footer__contactInfo'>
              <div className='footer__contactItem'>
                <strong>Dirección:</strong>
                <span>Av. de Mare Nostrum, local nº 8, 29649 La Cala de Mijas, Málaga</span>
              </div>
              <div className='footer__contactItem'>
                <strong>Teléfono:</strong>
                <span>951 06 87 77</span>
              </div>
              <div className='footer__contactItem'>
                <strong>Horario:</strong>
                <span>Lun-Dom: 12:00 - 23:00</span>
              </div>
            </div>
          </div>

          {/* Cuarta Columna: Enlaces Legales */}
          <div className='footer__column footer__column--legal'>
            <h3 className='footer__heading'>
              <span>Legal</span>
            </h3>
            <ul className='footer__list'>
              <li>
                <Link href='/cookies'>
                  <span className='footer__linkText'>Política de Privacidad</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='footer__bottom'>
        <div className='footer__bottomContainer'>
          <div className='footer__copy'>
            <span>&copy; {new Date().getFullYear()} DAK BURGER. Todos los derechos reservados.</span>
          </div>
          <div className='footer__credits'>
            <span>Desarrollado con</span>
            <span className='footer__heart'>❤</span>
            <span>por</span>
            <a href='https://domindez.com/' target='_blank' rel='noopener noreferrer' className='footer__creditsLink'>
              Domindez
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
