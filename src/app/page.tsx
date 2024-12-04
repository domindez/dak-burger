import BurgerSection from '@/components/BurgerSection'
import CheckMenu from '@/components/CheckMenu'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NavBoxSlider from '@/components/NavBoxSlider'
import Scoreboard from '@/components/Scoreboard'

export default function Home () {
  return (
    <div className='main-page'>
      <Header />
      <BurgerSection />
      <Scoreboard />
      <NavBoxSlider />
      <CheckMenu />
      <Footer />
    </div>
  )
}
