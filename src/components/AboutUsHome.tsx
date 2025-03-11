'use client'

import { useEffect, useRef } from 'react'
import { roboto } from '@/app/fonts/fonts'
import '../styles/InfoSection.scss'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AboutUsHome = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Registrar el plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    const element = sectionRef.current

    // Configurar la animación
    gsap.fromTo(
      element,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Limpieza al desmontar el componente
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={sectionRef} className='info-section'>
      <Image
        className='logo-in-about'
        src='/logo-horizontal.svg'
        height={300}
        width={600}
        alt='logo dak burger'
      />
      <div className='info'>
        <h2>Como empezo todo</h2>
        <p className={roboto.className}>
          Nacimos en plena pandemia, en 2020, con mucha ilusión y también un poco de miedo. Éramos solo tres personas con un objetivo claro: hacer las burgers que siempre habíamos querido comer. Nuestro fundador, Domingo González, apostó por un pequeño local en La Cala de Mijas, sin imaginar hasta dónde llegaríamos...
        </p>
        <Link href='/conocenos'>
          Sigue leyendo <ArrowUpRight />
        </Link>
      </div>
    </div>
  )
}

export default AboutUsHome
