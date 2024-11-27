import { Fragment } from 'react'
import '../styles/CheckMenu.scss'
import Image from 'next/image'
import { roboto } from '@/app/fonts/fonts'

const menuItems = [
  {
    title: 'VACA VIEJA',
    description: '230gr. de carne de vaca vieja nacional, tuétano, lascas de entrecote, mahonesa de ajo asado, queso payoyo, cebolla frita y cebolla plancha.',
    price: '13.90€',
    imgSrc: '/gallery/burger1.jpg',
    imgAlt: 'imagen de VACA VIEJA'
  },
  {
    title: 'SCARLETT J.',
    description: '230gr. de vaca nacional, cebolla frita, cheddar, salteado de cebolla y bacon, emulsión de yema de huevo y soja y mayo de chimichurri.',
    price: '13.90€',
    imgSrc: '/gallery/burger2.jpg',
    imgAlt: 'imagen de SCARLETT J.'
  },
  {
    title: 'DAK BURGER',
    description: '200gr. de vaca nacional, costilla deshuesada, salsa BBQ, bacon, lechuga, queso monterrey.',
    price: '11.50€',
    imgSrc: '/gallery/burger3.jpg',
    imgAlt: 'imagen de DAK BURGER'
  }
]

const CheckMenu = () => {
  return (
    <div className='check-menu-container'>
      <div className='check-menu'>
        <div className='check-menu__info'>
          <section className='with-bg'>
            <div className='section-header undefined'>
              <h2>Nuestra carta</h2>
            </div>
            <ul className='item-list'>
              {menuItems.slice(0, 4).map((item, index) => (
                <Fragment key={index}>
                  <li>
                    <div className='item-full'>
                      <div className='item-full__info'>

                        <h5>{item.title}</h5>

                        <p className='description' style={roboto.style}>{item.description}</p>
                        <div className='allergens-container' />
                        <div className='prices'>
                          <span>{item.price}</span>
                        </div>
                      </div>
                      <div className='img-container'>
                        {item.imgSrc && (
                          <Image
                            className='item-full__img'
                            src={item.imgSrc}
                            alt={item.imgAlt}
                            width={80}
                            height={80}
                          />
                        )}
                      </div>
                    </div>
                  </li>
                  <hr className='divider' />
                </Fragment>
              ))}
            </ul>
          </section>
        </div>
        <div className='see-complete'>
          <a href='https://trivify.es/cartasqr/dak-burger'>
            Ver carta completa
          </a>
        </div>
      </div>
    </div>
  )
}

export default CheckMenu
