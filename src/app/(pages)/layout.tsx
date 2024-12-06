import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
    <>
      <Header />
      <div className='page'>
        {children}
      </div>
      <Footer />
    </>
  )
}
