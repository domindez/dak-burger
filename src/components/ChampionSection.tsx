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
          src='/burger.png'
          height={600}
          width={600}
          alt='champion burger dak'
        />
      </div>
      <div className='info'>
        <h2 className='hide-mb'>Estamos en la Champion Burger</h2>
        <p className={roboto.className}>
          Lorem fistrum fistro amatomaa está la cosa muy malar condemor ese que
          llega pecador. Jarl ese que llega te voy a borrar el cerito ese pedazo
          de. Va usté muy cargadoo jarl ese que llega te va a hasé pupitaa me
          cago en tus muelas.
        </p>
      </div>
    </div>
  )
}

export default ChampionSection
