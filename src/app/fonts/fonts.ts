import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'

export const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' })

export const soccerLeague = localFont({
  src: './SoccerLeague.ttf',
  variable: '--font-geist-sans',
  weight: '100 400'
})

export const soccerLeagueCollege = localFont({
  src: './SoccerLeagueCollege.ttf',
  variable: '--font-geist-sans',
  weight: '100 400'
})
