'use client'

import { useEffect } from 'react'
import '../../../styles/Bookings.scss'

const BookingPage = () => {
  const DishWidget = () => {
    useEffect(() => {
      // Define la configuración del widget con los parámetros específicos de tu bar
      window._hors = [
        ['eid', 'hydra-6c013cba-0c23-4bcb-a363-eb26ab4316d7'],
        ['tagid', 'hors-hydra-6c013cba-0c23-4bcb-a363-eb26ab4316d7'],
        ['width', '100%'],
        ['height', ''],
        ['foregroundColor', ''],
        ['backgroundColor', '#fff0'],
        ['linkColor', '#0d4e91'],
        ['errorColor', ''],
        ['primaryButtonForegroundColor', ''],
        ['primaryButtonBackgroundColor', '#0d4e91'],
        ['secondaryButtonForegroundColor', 'white'],
        ['secondaryButtonBackgroundColor', 'red']
      ]

      // Crea y añade el script del widget
      const script = document.createElement('script')
      script.src = 'https://reservation.dish.co/widget.js'
      script.async = true
      document.body.appendChild(script)

      // Limpia el script cuando el componente se desmonta
      return () => {
        document.body.removeChild(script)
      }
    }, [])

    return <div id='hors-hydra-6c013cba-0c23-4bcb-a363-eb26ab4316d7' />
  }

  return (
    <div className='bookings'>
      <h2>Reserva tu mesa</h2>
      <DishWidget />
    </div>
  )
}

export default BookingPage
