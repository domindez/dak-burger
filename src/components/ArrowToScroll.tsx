'use client'

import { ArrowBigDownDash } from 'lucide-react'

const ArrowToScroll = () => {
  const handleScroll = () => {
    const targetSection = document.getElementById('burger')
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <ArrowBigDownDash
      className='arrow-down'
      size={40}
      onClick={handleScroll}
    />
  )
}
export default ArrowToScroll
