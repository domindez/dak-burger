import { roboto, soccerLeague } from '@/app/fonts/fonts'
import '../../../styles/Challenges.scss'
import Image from 'next/image'

// Datos para el ranking THE WALL
const wallRanking = [
  { pos: '🥇', name: 'Valferrer', date: '2/08/2023', time: '11:48', video: 'https://www.instagram.com/p/CvcniJRNyQI/' },
  { pos: '🥈', name: 'Esttik', date: '2/08/2023', time: '12:17', video: 'https://www.youtube.com/watch?v=fyhCaStvdqM' },
  { pos: '🥉', name: 'Anier', date: '28/08/2022', time: '24:43', video: 'https://www.instagram.com/reel/Chz7GZuDlvv/' },
  { pos: '4', name: 'Esttik', date: '05/06/2021', time: '25:00', video: 'https://www.youtube.com/watch?v=uKNg8jcgucg&t=401s' },
  { pos: '5', name: 'Adri', date: '26/08/2022', time: '28:34', video: 'https://www.instagram.com/reel/Ci-dSbIsQlt/' },
  { pos: '6', name: 'Javi Atienza', date: '30/06/2021', time: '37:18', video: 'https://www.youtube.com/watch?v=A5jH-_UfvuU' },
  { pos: '7', name: 'Cristian Athlete', date: '27/12/2021', time: '41:55', video: 'https://www.youtube.com/watch?v=wxZ7KyP6f7c' },
  { pos: '8', name: 'Denis', date: '13/08/2022', time: '50:52', video: 'https://www.instagram.com/reel/Cic-fMrgnzv/' },
  { pos: '9', name: 'Abel', date: '26/08/2022', time: '53:39', video: 'https://www.instagram.com/reel/Ci-qzTCjdWB/' }
]

// Datos para el ranking WALLY
const wallyRanking = [
  { pos: '🥇', name: 'Esttik', date: '02/08/2023', time: '2:13', video: 'https://www.youtube.com/watch?v=J_5uuhiHFU4' },
  { pos: '🥈', name: 'Ricardito Fit', date: '02/08/2023', time: '7:48', video: 'https://www.instagram.com/reel/CvciFD_Ngrd/' },
  { pos: '🥉', name: 'Jesus', date: '26/08/2022', time: '8:53', video: '' },
  { pos: '4', name: 'Denis', date: '08/06/2022', time: '8:58', video: 'https://www.instagram.com/reel/Ci-wZfNs27r/' },
  { pos: '5', name: 'Edu', date: '26/06/2022', time: '9:05', video: '' },
  { pos: '6', name: 'Jorge', date: '26/06/2022', time: '9:10', video: '' },
  { pos: '7', name: 'Guille M.', date: '30/06/2021', time: '9:24', video: '' },
  { pos: '8', name: 'Alvaro P.', date: '25/06/2022', time: '9:34', video: '' },
  { pos: '9', name: 'Abel Comocome', date: '02/10/2022', time: '9:44', video: '' },
  { pos: '10', name: 'Alejandro R.', date: '25/08/2023', time: '9:50', video: '' },
  { pos: '11', name: 'Guille R.', date: '26/08/2022', time: '9:55', video: '' },
  { pos: '12', name: 'Alvaro L.', date: '26/08/2022', time: '9:59', video: '' }
]

const Challenges = () => {
  return (
    <div className='challenges'>
      {/** CABECERA CON VIDEO */}
      <div className='challenges-video-container'>
        <div className='title'>
          <h2>Nuestros Retos</h2>
          <p className={roboto.className}>PON A PRUEBA TU ESTÓMAGO</p>
        </div>
        <video src='/challenges.mp4' muted autoPlay loop />
      </div>

      {/** CONTENEDOR PRINCIPAL DE LOS RETOS */}
      <div style={roboto.style} className='challenges__container'>

        {/** ================== THE WALL ================== */}
        <div id='THEWALL' className='col-12 col-md-6' style={{ padding: '1rem', color: '#000' }}>
          {/* Imagen principal */}
          <Image
            src='/reto-wally.jpg'
            style={{ borderRadius: '14px' }}
            alt='THE WALL'
            width={500}
            height={300}
          />

          {/* Título */}
          <h2
            style={{
              textAlign: 'center',
              marginBottom: 0,
              fontSize: '5rem',
              paddingBottom: 0,
              color: '#00236a',
              textWrap: 'nowrap'
            }}
            className={soccerLeague.className}
          >
            THE WALL
          </h2>

          {/* Datos rápidos */}
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <span style={{
              fontSize: '3rem',
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
              height: '100px',
              width: '100px',
              textAlign: 'center'
            }}
            >
              3<br />
              <span style={{ fontSize: '15px', position: 'relative', top: '-35px' }}>
                kilos
              </span>
            </span>

            <span style={{
              fontSize: '3rem',
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
              height: '100px',
              width: '100px',
              textAlign: 'center'
            }}
            >
              60<br />
              <span style={{ fontSize: '15px', position: 'relative', top: '-35px' }}>
                minutos
              </span>
            </span>

            <span style={{
              fontSize: '3rem',
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
              height: '100px',
              width: '100px',
              textAlign: 'center'
            }}
            >
              65<br />
              <span style={{ fontSize: '15px', position: 'relative', top: '-35px' }}>
                euros
              </span>
            </span>
          </div>

          {/* Descripción breve */}
          <p style={{
            textAlign: 'center',
            marginTop: '1rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            marginBottom: '1rem'
          }}
          >
            Nuestro monstruo, el reto de comida más famoso de España, una bandeja con más de 3kg de comida que pone a prueba a los estómagos más preparados.
          </p>

          {/* Botón de reserva */}
          <a
            href='/reserva'
            style={{
              textAlign: 'center',
              fontSize: '1rem',
              fontWeight: 700,
              fontFamily: 'Montserrat',
              padding: '1rem 2rem',
              background: '#00236a',
              color: '#fff',
              borderRadius: '50px',
              margin: 'auto',
              display: 'block',
              maxWidth: '300px',
              marginBottom: '1rem'
            }}
          >
            QUIERO HACER THE WALL
          </a>

          {/* Nota sobre la reserva */}
          <p style={{
            textAlign: 'center',
            fontSize: '0.8rem',
            marginBottom: '2rem'
          }}
          >
            Realiza tu reserva y especifica en los comentarios que quieres hacer THE WALL
          </p>

          {/* Sección: Contenido de THE WALL */}
          <div style={{
            padding: '1rem 2rem',
            border: '2px solid #F4F4F4',
            borderRadius: '15px'
          }}
          >
            <p>
              🥯 Pan brioche<br />
              🥩 6 Patties de 200gr. de vaca nacional madurada<br />
              🍖 2 Costillas DAK BBQ<br />
              🧀 Queso Monterey Jack<br />
              🧀 3 Quesos Monterey Jack rebozados<br />
              🧀 Queso cheddar<br />
              🥓 Pulled Pork<br />
              🥬 Lechuga<br />
              🧂 Salsa Burger<br />
              🍟 Patatas fritas naturales, sweet potatoes y patatas de rejilla<br /><br />
              🥤 Podrá beber agua o refresco ilimitado
            </p>
          </div>

          {/* PREMIOS THE WALL */}
          <div style={{
            padding: '1rem 2rem',
            border: '2px solid #F4F4F4',
            borderRadius: '15px',
            marginTop: '1rem'
          }}
          >
            <h2 className={soccerLeague.className}>PREMIOS</h2>
            <p>
              No pagas<br />
              Camiseta exclusiva THE WALL que solo consiguen los que lo vencen<br />
              Tu foto en THE WALL OF FAME<br />
              Tu tiempo en nuestro raking online<br />
              150 € de premio si superas el mejor tiempo vigente
            </p>
          </div>

          {/* Raking THE WALL */}
          <div style={{
            padding: '1rem 2rem',
            marginTop: '1rem',
            border: '2px solid #F4F4F4',
            borderRadius: '15px'
          }}
          >
            <h2 className={soccerLeague.className}>Raking THE WALL</h2>

            {/* Contenedor scroll para móvil */}
            <div className='table-wrapper'>
              <table style={{ textAlign: 'center' }}>
                <thead>
                  <tr>
                    <th>Pos.</th>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Tiempo</th>
                    <th>Vídeo</th>
                  </tr>
                </thead>
                <tbody>
                  {wallRanking.map((item, index) => (
                    <tr key={index}>
                      <td>{item.pos}</td>
                      <td>{item.name}</td>
                      <td>{item.date}</td>
                      <td>{item.time}</td>
                      <td>
                        {item.video
                          ? (
                            <a
                              href={item.video}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              Ver vídeo
                            </a>
                            )
                          : (
                              ''
                            )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/** ================== WALLY ================== */}
        <div id='WALLY' className='col-12 col-md-6' style={{ padding: '1rem', color: '#000' }}>
          {/* Imagen principal */}
          <Image
            src='/reto-wall.jpg'
            style={{ borderRadius: '14px' }}
            alt='WALLY'
            width={500}
            height={300}
          />

          {/* Título */}
          <h2
            style={{
              textAlign: 'center',
              marginBottom: 0,
              paddingBottom: 0,
              fontSize: '5rem',
              color: '#ff0000'
            }}
            className={soccerLeague.className}
          >
            WALLY
          </h2>

          {/* Datos rápidos */}
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <span style={{
              fontSize: '3rem',
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
              height: '100px',
              width: '100px',
              textAlign: 'center'
            }}
            >
              1<br />
              <span style={{ fontSize: '15px', position: 'relative', top: '-35px' }}>
                kilo
              </span>
            </span>
            <span style={{
              fontSize: '3rem',
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
              height: '100px',
              width: '100px',
              textAlign: 'center'
            }}
            >
              1<br />
              <span style={{ fontSize: '15px', position: 'relative', top: '-35px' }}>
                milkshake
              </span>
            </span>
            <span style={{
              fontSize: '3rem',
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
              height: '100px',
              width: '100px',
              textAlign: 'center'
            }}
            >
              10<br />
              <span style={{ fontSize: '15px', position: 'relative', top: '-35px' }}>
                minutos
              </span>
            </span>
            <span style={{
              fontSize: '3rem',
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
              height: '100px',
              width: '100px',
              textAlign: 'center'
            }}
            >
              35<br />
              <span style={{ fontSize: '15px', position: 'relative', top: '-35px' }}>
                euros
              </span>
            </span>
          </div>

          {/* Descripción breve */}
          <p style={{
            marginTop: '1rem',
            textAlign: 'center',
            fontSize: '1.1rem',
            fontWeight: 600,
            marginBottom: '1rem'
          }}
          >
            El hermano pequeño de THE WALL. Un reto más asequible que nuestro monstruo de 3kg… aun así, con su burger de 1kg y su milkshake de medio litro es difícil de superar.
          </p>

          {/* Botón de reserva */}
          <a
            href='/reserva'
            style={{
              textAlign: 'center',
              fontSize: '1rem',
              fontWeight: 700,
              fontFamily: 'Montserrat',
              padding: '1rem 2rem',
              background: '#ff0000',
              color: '#fff',
              borderRadius: '50px',
              margin: 'auto',
              display: 'block',
              maxWidth: '300px',
              marginBottom: '1rem'
            }}
          >
            QUIERO HACER WALLY
          </a>

          {/* Nota sobre la reserva */}
          <p style={{
            textAlign: 'center',
            fontSize: '0.8rem',
            marginBottom: '2rem'
          }}
          >
            Realiza tu reserva y especifica en los comentarios que quieres hacer WALLY
          </p>

          {/* Contenido de WALLY */}
          <div style={{
            padding: '1rem 2rem',
            border: '2px solid #F4F4F4',
            borderRadius: '15px'
          }}
          >
            <p>
              🥯 Pan brioche<br />
              🥩 8 Patties smash de 90gr. de vaca nacional madurada<br />
              🥓 Bacon<br />
              🧀 Queso Monterey Jack<br />
              🧀 Queso cheddar<br />
              🥓 Pulled Pork<br />
              😲 1 Queso Monterey Jack Rebozado<br />
              🧂 Salsa Wally<br /><br />
              🥤 1 Milkshake de medio litro
            </p>
          </div>

          {/* PREMIOS WALLY */}
          <div style={{
            padding: '1rem 2rem',
            border: '2px solid #F4F4F4',
            borderRadius: '15px',
            marginTop: '1rem'
          }}
          >
            <h2 className={soccerLeague.className}>PREMIOS</h2>
            <p>
              No pagas<br />
              Gorra exclusiva WALLY que solo consiguen los que lo vencen<br />
              Tu foto en THE WALL OF FAME<br />
              Tu tiempo en nuestro ranking online
            </p>
          </div>

          {/* Raking WALLY */}
          <div style={{
            padding: '1rem 2rem',
            border: '2px solid #F4F4F4',
            borderRadius: '15px',
            marginTop: '1rem'
          }}
          >
            <h2 className={soccerLeague.className}>Raking WALLY</h2>

            {/* Contenedor scroll para móvil */}
            <div className='table-wrapper'>
              <table style={{ textAlign: 'center' }}>
                <thead>
                  <tr>
                    <th>Pos.</th>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Tiempo</th>
                    <th>Vídeo</th>
                  </tr>
                </thead>
                <tbody>
                  {wallyRanking.map((item, index) => (
                    <tr key={index}>
                      <td>{item.pos}</td>
                      <td>{item.name}</td>
                      <td>{item.date}</td>
                      <td>{item.time}</td>
                      <td>
                        {item.video
                          ? (
                            <a
                              href={item.video}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              Ver vídeo
                            </a>
                            )
                          : (
                              ''
                            )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div> {/* fin #WALLY */}
      </div> {/* fin .challenges__container */}
    </div> // fin .challenges
  )
}

export default Challenges
