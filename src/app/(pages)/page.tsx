import AboutUsHome from '@/components/AboutUsHome'
import BurgerSection from '@/components/BurgerSection'
import CatchWord from '@/components/CatchWord'
import ChampionSection from '@/components/ChampionSection'
import MapComponent from '@/components/MapComponent'
import Scoreboard from '@/components/Scoreboard'
import Slider from '@/components/slider/Slider'

export default function Home () {
  return (
    <div className='main-page'>
      <CatchWord />
      <BurgerSection />
      <Scoreboard />
      <Slider />
      <AboutUsHome />
      <ChampionSection />
      <MapComponent />
    </div>
  )
}
