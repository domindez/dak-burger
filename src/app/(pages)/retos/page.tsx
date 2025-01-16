import { roboto } from '@/app/fonts/fonts'
import '../../../styles/Challenges.scss'

const Challenges = () => {
  return (
    <div className='challenges'>
      <div className='challenges-video-container'>
        <div className='title'>
          <h2>
            Nuestros Retos
          </h2>
          <p className={roboto.className}>PON A PRUEBA TU ESTÓMAGO</p>
        </div>
        <video src='/challenges.mp4' muted autoPlay loop />
      </div>

      <div className='challenges__container'>
      </div>
    </div>
  )
}
export default Challenges
