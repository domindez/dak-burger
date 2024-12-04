import BurgerSection from '@/components/BurgerSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NavSlider from '@/components/NavSlider'
import Scoreboard from '@/components/Scoreboard'

export default function Home () {
  return (
    <div>
      <Header />
      <BurgerSection />
      <Scoreboard />
      <NavSlider />
      <Footer />
    </div>
  )
}
