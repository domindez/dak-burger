import Image from 'next/image'
import '../../../styles/AboutUs.scss'
import { roboto, soccerLeague } from '@/app/fonts/fonts'

const AboutUs = () => {
  return (
    <div className='about-us' style={roboto.style}>
      <Image className='main-img' src='/gallery/burger2.jpg' width={1000} height={600} alt='about us dak burger' />

      <div className='container'>
        <h1 style={soccerLeague.style}>DAK BURGER: FROM MALAGA TO THE WORLD</h1>
        <p>
          Nacimos en plena pandemia, en <strong>2020</strong>, con mucha ilusión y también un poco de miedo. Éramos solo
          tres personas con un objetivo claro: <strong>hacer las burgers que siempre habíamos querido comer</strong>.
          Nuestro fundador, <strong>Domingo González</strong>, apostó por un pequeño local en{' '}
          <strong>La Cala de Mijas</strong>, sin imaginar hasta dónde llegaríamos.
        </p>
        <p>
          Hoy, seguimos aquí para hacerte disfrutar, ganar experiencias, vivir el momento y compartir nuestra pasión con
          el mundo.
        </p>
        <h2 style={soccerLeague.style}>Nuestra historia</h2>
        <Image className='article-img' src='/about/about1.jpg' width={1000} height={600} alt='about us dak burger' />
        <div className='date'>
          <h3 style={soccerLeague.style}>2020</h3>
          <hr />
        </div>
        <p>
          <strong>Domi González</strong> abre el primer <strong>DAK BURGER</strong> en <strong>La Cala de Mijas</strong>
          .
        </p>
        <p>
          Apenas tres meses después, <strong>Joe Burger Challenge</strong> nos visitó y, sin pedir nada a cambio, nos
          dedicó un vídeo que lo cambió todo. Fue un antes y un después para nosotros.
        </p>
        <iframe
          width='100%'
          height='400'
          src='https://www.youtube.com/embed/QFS0KT1QaDE'
          title='LA BURGER QUE LE DIO SENTIDO A TODO - ¿Hace Dani García la hamburguesa perfecta?'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />
        <br />
        <br />
        <p>
          Ese mismo año, lanzamos nuestro primer reto: <strong>THE WALL</strong>. Inspirado en la cultura de los food
          challenges de EE.UU., creamos un muro de <strong>3 kg de comida</strong> que debía ser vencido en{' '}
          <strong>60 minutos</strong>. A día de hoy, sigue siendo considerado uno de los mejores retos de España.
        </p>
        <Image className='article-img' src='/about/about2.jpg' width={1000} height={600} alt='about us dak burger' />
        <div className='date'>
          <h3 style={soccerLeague.style}>2021</h3>
          <hr />
        </div>
        <p>
          Abrimos nuestro segundo restaurante en <strong>Málaga centro</strong>, dando vida a{' '}
          <strong>DAK BURGER MÁLAGA</strong> (hoy en día convertido en nuestra segunda marca, <strong>B-Smash</strong>).
        </p>
        <iframe
          width='100%'
          height='400'
          src='https://www.youtube.com/embed/uKNg8jcgucg'
          title='ESTA HAMBURGUESA de +3KG NADIE HA PODIDO TERMINARLA HASTA HOY 🍔 **ASÍ REACCIONAN al CONSEGUIRLO**'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />
        <br />
        <br />
        <p>
          Apenas un mes después, <strong>Esttik</strong> nos contactó con un solo objetivo: destrozar{' '}
          <strong>THE WALL</strong>, un reto que nadie había conseguido superar… y entonces pasó esto 😨
        </p>
        <Image className='article-img' src='/about/about3.jpg' width={1000} height={600} alt='about us dak burger' />
        <div className='date'>
          <h3 style={soccerLeague.style}>2022</h3>
          <hr />
        </div>{' '}
        <p>
          Seguimos creciendo y decidimos llevar <strong>DAK LA CALA DE MIJAS</strong> al siguiente nivel. Reformamos el
          local, triplicamos su capacidad y creamos nuestra propia <strong>FOOD CHALLENGE CAGE</strong>, una jaula
          donde, desde entonces, se realizan todos nuestros retos.
        </p>
        <p>
          Pero no nos detuvimos ahí. Lanzamos un nuevo desafío: <strong>WALLY</strong>, el hermano pequeño de{' '}
          <strong>THE WALL</strong>. Una burger de <strong>1 kg</strong> y un batido de <strong>medio litro</strong> que
          debían ser vencidos en <strong>10 minutos</strong>.
        </p>
        <Image className='article-img' src='/about/about4.jpg' width={1000} height={600} alt='about us dak burger' />
        <div className='date'>
          <h3 style={soccerLeague.style}>2023</h3>
          <hr />
        </div>{' '}
        <p>
          Dimos un paso más en nuestra evolución y lanzamos <strong>B-Smash</strong>, nuestra marca de smash burgers,
          con la misma pasión con la que abrimos DAK. Hoy, se ha convertido en una de las smash más reconocidas de
          Málaga.
        </p>
        <p>
          Además, siempre habíamos soñado con tener nuestra <strong>Food Truck</strong>, y{' '}
          <strong>The Champions Burger</strong> nos dio la oportunidad perfecta. Nos pusimos manos a la obra y, en
          tiempo récord, conseguimos nuestra primera <strong>Food Truck</strong>, la adaptamos y participamos en el
          evento.
        </p>
        <div className='date'>
          <h3 style={soccerLeague.style}>2024</h3>
          <hr />
        </div>{' '}
        <p>
          <strong>Nuestro mejor año. Sin duda.</strong>
        </p>
        <p>
          Consolidamos el crecimiento de la marca y volvimos a <strong>The Champions Burger</strong>, donde con nuestra
          burger <strong>Stellar</strong>, logramos:
        </p>
        <ul>
          <li>
            <strong>🏆 Mejor burger de Málaga</strong>
          </li>
          <li>
            <strong>🥈 Segunda mejor burger de Europa</strong>
          </li>
          <li>
            <strong>🥉 Tercera mejor burger de España</strong>
          </li>
        </ul>
        <p>
          Esto es solo el comienzo. Lo que vendrá después, no lo sabemos… Pero lo que sí sabemos es que seguiremos
          llevando <strong>DAK BURGER</strong> de Málaga al mundo. 🚀🍔
        </p>
        <h2>
          <strong>DAK BURGER EN THE CHAMPIONS BURGER 2025</strong>
        </h2>
        <p>
          Tras el éxito del año pasado con nuestra <strong>Stellar</strong>, ganadora de:
        </p>
        <ul>
          <li>
            <strong>🏆 Mejor burger de Málaga</strong>
          </li>
          <li>
            <strong>🥈 Segunda mejor de Europa</strong>
          </li>
          <li>
            <strong>🥉 Tercera mejor de España</strong>
          </li>
        </ul>
        <p>
          Este año volvemos con <strong>La Galáctica</strong>, una burger de otro planeta.
        </p>
        <p>
          <strong>¿Qué la hace especial?</strong>
        </p>
        <ul>
          <li>
            <strong>🥩 Brisket ahumado caramelizado</strong>, el protagonista absoluto.
          </li>
          <li>
            <strong>🔥 Carne de chuletón de vaca nacional</strong>, jugosa y llena de sabor.
          </li>
          <li>
            <strong>🧀 Cheddar rojo madurado</strong>, fundido a la perfección.
          </li>
          <li>
            <strong>🧅 Onion bits</strong> para un toque crujiente.
          </li>
          <li>
            <strong>🌟 Salsa galáctica</strong>, un secreto que te hará viajar por el universo.
          </li>
          <li>
            <strong>🌙 Polvo lunar</strong>, nuestro toque mítico para llevarla al infinito.
          </li>
        </ul>
        <p className='link'>
          <a href='https://thechampionsburger.es/' target='_blank'>
            Mira en qué ciudad nos encontramos en: thechampionsburger.es
          </a>
        </p>
      </div>
    </div>
  )
}
export default AboutUs
