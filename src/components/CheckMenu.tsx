import Image from 'next/image'
import '../styles/CheckMenu.scss'
import Link from 'next/link'

const CheckMenu = () => {
  return (
    <div className='check-menu'>
      <div className='img-container'>
        <Image src='/gallery/burger1.jpg' alt='menu dak burger' height={800} width={800} />
        <Link href='/menu'>Consulta nuestro Menu</Link>
      </div>
    </div>
  )
}
export default CheckMenu
