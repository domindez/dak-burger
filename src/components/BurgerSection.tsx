import '../styles/Burger.scss'

const BurgerSection = () => {
  return (
    <div className='burger-section' id='burger'>
      {/* <div className='image'>
        <Image src='/burger.png' height={600} width={600} alt='burger' />
      </div> */}
      <video src='/burger-video.mp4' muted autoPlay loop />
      {/* <div className='info'>
        <h2>STELLAR BURGER</h2>
        <p style={roboto.style}>Tenemos la burger más burber de todas las burgers, es una cosa de locos, vamos. Si quieres comerte una burger que sepa a burger más que ninguna burger, ven y prueba nuestra burger.</p>
      </div> */}
    </div>
  )
}
export default BurgerSection
