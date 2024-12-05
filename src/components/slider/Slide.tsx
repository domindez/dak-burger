import Link from 'next/link'
import '../../styles/Slider.scss'
import Image from 'next/image'

interface Props {
  img: string;
  buttonText?: string;
  buttonUrl?: string;
  externalLink?: boolean;
}

const Slide = ({ img, buttonText, buttonUrl, externalLink }: Props) => {
  return (
    <div className='slide'>
      <Image src={img} width={800} height={800} alt='gottan slide' />
      {buttonText && externalLink
        ? (
          <a href={buttonUrl} target='_blank' rel='noopener noreferrer'>
            {buttonText}
          </a>
          )
        : (
            buttonText && (
              <Link href={`/${buttonUrl}`}>
                {buttonText}
              </Link>
            )
          )}
    </div>
  )
}

export default Slide
