import Image from 'next/image'
import '../styles/CheckMenu.scss'

const CheckMenu = () => {
  return (
    <div className='check-menu'>
      <div className='img-container'>
        <Image src='/gallery/burger1.jpg' alt='menu dak burger' height={800} width={800} />
        <a href='#'>Consulta nuestro Menu</a>
      </div>
    </div>
  )
}
export default CheckMenu
