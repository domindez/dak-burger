import type { Metadata } from 'next'
import '../styles/Globals.scss'
import { ReactNode } from 'react'
import { soccerLeague } from './fonts/fonts'

export const metadata: Metadata = {
  title: 'DAK Burger',
  description: 'Burgers made in USA'
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
