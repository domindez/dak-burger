'use client'

import { useEffect, useRef } from 'react'
import { roboto } from '@/app/fonts/fonts'
import '../styles/ChampionSection.scss'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ChampionSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Registrar el plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    const element = sectionRef.current

    // Configurar la animación
    gsap.fromTo(
      element,
      { opacity: 0, x: -50 }, // Inicio: oculto y desplazado a la izquierda
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%', // Inicia la animación cuando el top del elemento alcanza el 80% del viewport
          toggleActions: 'play none none none' // Reproduce la animación una vez
        }
      }
    )

    // Limpieza al desmontar el componente
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={sectionRef} className='champion-section'>
      <h2 className='champion-tittle-mb hide-pc'>Estamos en la Champion Burger</h2>
      <div className='image'>
        <Image
          className='champion-burger'
          src='/gallery/champions.webp'
          height={600}
          width={600}
          alt='champion burger dak'
        />
      </div>
      <div className='info'>
        <h2 className='hide-mb'>Estamos en la Champion Burger</h2>
        <div className='text' style={roboto.style}>

          <p>
            Tras el éxito del año pasado con nuestra <strong>Stellar</strong>, ganadora de:
          </p>
          <ul>
            <li>
              <strong>🏆 Mejor burger de Málaga</strong>
            </li>
            <li>
              <strong>🥈 Segunda mejor de Europa</strong>
            </li>
            <li>
              <strong>🥉 Tercera mejor de España</strong>
            </li>
          </ul>
          <p>
            Este año volvemos con <strong>La Galáctica</strong>, una burger de otro planeta.
          </p>
          <p>
            <strong>¿Qué la hace especial?</strong>
          </p>
          <ul>
            <li>
              <strong>🥩 Brisket ahumado caramelizado</strong>, el protagonista absoluto.
            </li>
            <li>
              <strong>🔥 Carne de chuletón de vaca nacional</strong>, jugosa y llena de sabor.
            </li>
            <li>
              <strong>🧀 Cheddar rojo madurado</strong>, fundido a la perfección.
            </li>
            <li>
              <strong>🧅 Onion bits</strong> para un toque crujiente.
            </li>
            <li>
              <strong>🌟 Salsa galáctica</strong>, un secreto que te hará viajar por el universo.
            </li>
            <li>
              <strong>🌙 Polvo lunar</strong>, nuestro toque mítico para llevarla al infinito.
            </li>
          </ul>
          <p className='link'>
            <a href='https://thechampionsburger.es/' target='_blank'>
              Mira en qué ciudad nos encontramos en: thechampionsburger.es
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default ChampionSection
