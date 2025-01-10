import Link from 'next/link'
import Image from 'next/image'
import '../../styles/Slider.scss'

interface Props {
  img: string;
  buttonText?: string;
  buttonUrl?: string;
  externalLink?: boolean;
  slideIndex: number;
}

const Slide = ({ img, buttonText, buttonUrl, externalLink, slideIndex }: Props) => {
  // Función auxiliar para determinar la clase según el slideIndex
  const getClass = () => {
    if (slideIndex === 0) return 'red-btn'
    if (slideIndex === 3) return 'yellow-btn'
    return ''
  }

  return (
    <div className='slide'>
      <Image src={img} width={800} height={800} alt='dak slide' />
      {buttonText && externalLink
        ? (
          <a
            href={buttonUrl}
            target='_blank'
            rel='noopener noreferrer'
            className={getClass()}
          >
            {buttonText}
          </a>
          )
        : buttonText
          ? (
            <Link href={`/${buttonUrl}`} className={getClass()}>
              {buttonText}
            </Link>
            )
          : null}
    </div>
  )
}

export default Slide
