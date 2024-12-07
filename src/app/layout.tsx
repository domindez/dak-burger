import type { Metadata } from 'next'
import '../styles/Globals.scss'
import { ReactNode } from 'react'
import { soccerLeague } from './fonts/fonts'
export const metadata: Metadata = {
  title: 'DAK Burger | Las Mejores Hamburguesas en Mijas',
  description: 'En DAK Burger, disfruta de las hamburguesas más deliciosas de Mijas. Reconocidos como la tercera mejor hamburguesa de España. ¡Ven y prueba nuestras creaciones únicas que son la leche!',

  // Palabras clave para SEO
  keywords: [
    'Hamburguesas Mijas',
    'Mejores hamburguesas España',
    'DAK Burger',
    'Hamburguesería premiada',
    'Comida gourmet Mijas',
    'Hamburguesas artesanales',
    'Cena en Mijas',
    'Restaurante de hamburguesas',
    'Premios hamburguesas España'
  ],

  // Información del autor
  authors: [
    {
      name: 'DAK Burger',
      url: 'https://www.dakburger.com'
    }
  ],

  // Open Graph para redes sociales
  openGraph: {
    title: 'DAK Burger | Las Mejores Hamburguesas en Mijas',
    description: 'Hamburguesas artesanales que te encantarán en el corazón de Mijas Costa. Ganadores del premio a la 3º mejor hamburguesa de España',
    url: 'https://www.dakburger.com',
    siteName: 'DAK Burger',
    images: [
      {
        url: 'https://www.dakburger.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deliciosa hamburguesa de DAK Burger'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={soccerLeague.className}>
        {children}
      </body>
    </html>
  )
}
