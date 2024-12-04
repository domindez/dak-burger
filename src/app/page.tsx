import BurgerSection from '@/components/BurgerSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NavBoxSlider from '@/components/NavBoxSlider'
import Scoreboard from '@/components/Scoreboard'

export default function Home () {
  return (
    <div>
      <Header />
      <BurgerSection />
      <Scoreboard />
      <NavBoxSlider />
      <Footer />
    </div>
  )
}
