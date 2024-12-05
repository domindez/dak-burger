'use client'

import Slide from './Slide'
import '../../styles/Slider.scss'

import { useEffect, useState, useRef } from 'react'

const Slider = () => {
  const pcSlides = [
    { img: '/gallery/burger2.jpg', buttonText: 'FROM MALAGA TO THE WORLD', buttonUrl: '#' },
    { img: '/gallery/burger1.jpg', buttonText: 'NUESTRA CARTA', buttonUrl: 'menu' },
    { img: '/gallery/burger3.jpg', buttonText: 'SIGUENOS EN REDES', buttonUrl: '#' },
    { img: '/gallery/burger1.jpg', buttonText: 'ESTAMOS EN MALAGA CAPITAL CON BSMASH', buttonUrl: '#' }
  ]
  const mobileSlides = [
    { img: '/gallery/burger2.jpg', buttonText: 'FROM MALAGA TO THE WORLD', buttonUrl: '#' },
    { img: '/gallery/burger1.jpg', buttonText: 'NUESTRA CARTA', buttonUrl: 'menu' },
    { img: '/gallery/burger3.jpg', buttonText: 'SIGUENOS EN REDES', buttonUrl: '#' },
    { img: '/gallery/burger1.jpg', buttonText: 'ESTAMOS EN MALAGA CAPITAL CON BSMASH', buttonUrl: '#' }
  ]

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
      if (currentSlide >= slides.length - 1 && direction === 1) {
        setDirection(-1)
      } else if (currentSlide <= 0 && direction === -1) {
        setDirection(1)
      }
      setCurrentSlide((prevSlide) =>
        Math.max(0, Math.min(slides.length - 1, prevSlide + direction))
      )
    }, 4000)

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
            <Slide {...slide} />
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
