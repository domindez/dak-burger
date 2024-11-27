import BurgerSection from '@/components/BurgerSection'
import CheckMenu from '@/components/CheckMenu'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Scoreboard from '@/components/Scoreboard'

export default function Home () {
  return (
    <div>
      <Header />
      <Hero />
      <BurgerSection />
      <Scoreboard />
      <CheckMenu />
      <Gallery />
      <Footer />
    </div>
  )
}
