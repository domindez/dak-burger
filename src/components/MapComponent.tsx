import React from 'react'

const MapComponent = () => {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3206.909813353163!2d-4.687594824326317!3d36.50803907233187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd731f4bf14ec351%3A0xe2a308d1790e6538!2sDak%20Burger!5e0!3m2!1ses!2ses!4v1733564060229!5m2!1ses!2ses'
      width='100%'
      height='300'
      style={{ border: 0 }}
      allowFullScreen
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      title='Google Map'
    />
  )
}

export default MapComponent
