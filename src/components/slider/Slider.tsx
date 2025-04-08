'use client'

import Slide from './Slide'
import '../../styles/Slider.scss'

import { useEffect, useState, useRef } from 'react'

const Slider = () => {
  const pcSlides = [
    { img: '/gallery/menu-pc.webp', buttonText: 'NUESTRO MENU', buttonUrl: 'carta' },
    { img: '/gallery/booking-pc.webp', buttonText: 'RESERVA TU MESA', buttonUrl: 'reserva' },
    { img: '/gallery/delivery-pc.webp', buttonText: 'PIDE A DOMICILIO', externalLink: true, buttonUrl: 'https://dakburgerlacalademijas.order.app.hd.digital/menus' },
    { img: '/gallery/bsmash-pc.webp', buttonText: 'ESTAMOS EN MALAGA CAPITAL CON BSMASH', externalLink: true, buttonUrl: 'https://bsmash.es/' },
    { img: '/gallery/redes-pc.webp', buttonText: 'SIGUENOS EN REDES', buttonUrl: '#' }
  ]
  const mobileSlides = [
    { img: '/gallery/menu.webp', buttonText: 'NUESTRO MENU', buttonUrl: 'carta' },
    { img: '/gallery/booking.webp', buttonText: 'RESERVA TU MESA', buttonUrl: 'reserva' },
    { img: '/gallery/delivery.webp', buttonText: 'PIDE A DOMICILIO', externalLink: true, buttonUrl: 'https://dakburgerlacalademijas.order.app.hd.digital/menus' },
    { img: '/gallery/bsmash.webp', buttonText: 'ESTAMOS EN MALAGA CAPITAL CON BSMASH', externalLink: true, buttonUrl: 'https://bsmash.es/' },
    { img: '/gallery/redes.webp', buttonText: 'SIGUENOS EN REDES', buttonUrl: '#' }
  ]

  const slideTimer = 0
  const [isMobile, setIsMobile] = useState(false)
  const [slides, setSlides] = useState(pcSlides)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const slideRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const [canSwipe, setCanSwipe] = useState(true)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize() // Inicializa el valor de `isMobile`
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setSlides(isMobile ? mobileSlides : pcSlides)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile])

  const handleTouchStart = (e: any) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: any) => {
    if (!canSwipe) return
    const touchEndX = e.touches[0].clientX
    const delta = touchStartX.current - touchEndX

    if (Math.abs(delta) > 50) {
      setCanSwipe(false)
      setTimeout(() => setCanSwipe(true), 500)

      if (delta > 0 && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1)
      } else if (delta < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
      }

      touchStartX.current = touchEndX
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (slideTimer < 1) return
      if (currentSlide >= slides.length - 1 && direction === 1) {
        setDirection(-1)
      } else if (currentSlide <= 0 && direction === -1) {
        setDirection(1)
      }
      setCurrentSlide((prevSlide) =>
        Math.max(0, Math.min(slides.length - 1, prevSlide + direction))
      )
    }, slideTimer)

    return () => clearInterval(timer)
  }, [currentSlide, direction, slides.length])

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out'
      slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`
    }
  }, [currentSlide])

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

  const handleMouseDown = (e: any) => {
    e.preventDefault()
    setIsDragging(true)
    touchStartX.current = e.clientX
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: any) => {
    if (!isDragging) return

    const mouseEndX = e.clientX
    const delta = touchStartX.current - mouseEndX

    if (Math.abs(delta) > 50) {
      setIsDragging(false)

      if (delta > 0 && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1)
      } else if (delta < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
      }

      touchStartX.current = mouseEndX
    }
  }

  return (
    <div className='slider'>
      <div
        ref={slideRef}
        className='slides'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
      >
        {slides.map((slide, index) => (
          <div className='slide' key={index}>
            <Slide {...slide} slideIndex={index} />
          </div>
        ))}
      </div>
      <div className='indicator'>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
