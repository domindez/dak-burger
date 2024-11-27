// components/Gallery.jsx

import Image from 'next/image'
import '../styles/Gallery.scss'

const Gallery = () => {
  const images = [
    '/gallery/burger1.jpg',
    '/gallery/burger2.jpg',
    '/gallery/burger3.jpg'
  ]

  return (
    <div className='gallery'>
      {images.map((src, index) => (
        <div className='gallery__item' key={index}>
          <Image
            src={src}
            alt={`Imagen de hamburguesa ${index + 1}`}
            layout='fill'
            objectFit='cover'
          />
        </div>
      ))}
    </div>
  )
}

export default Gallery
