import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'

export default function NotFound () {
  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 100px)',
          fontWeight: '400',
          gap: '20px'
        }} className='not-found'
      >
        <h1 style={{ fontWeight: '400' }}>404</h1>
        <h2 style={{ fontWeight: '400' }}>Pagina no encontrada</h2>
        <Link href='/'>Volver a casa</Link>
      </div>
      <Footer />
    </div>
  )
}
