import AboutUsHome from '@/components/AboutUsHome'
import BurgerSection from '@/components/BurgerSection'
import CheckMenu from '@/components/CheckMenu'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Scoreboard from '@/components/Scoreboard'
import Slider from '@/components/slider/Slider'

export default function Home () {
  return (
    <div className='main-page'>
      <Header />
      <BurgerSection />
      <Scoreboard />
      <Slider />
      <AboutUsHome />
      <CheckMenu />
      <Footer />
    </div>
  )
}
