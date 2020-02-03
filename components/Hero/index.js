import { useEffect, useState } from 'react'
import { Hero, HeroTitle, HeroSubtitle } from './index.style'
import { TextMask } from '../TextMask'

const ThisHero = ({ isHidden }) => {
  const [showSubtitle, setshowSubtitle] = useState(false)
  const [showTitle, setshowTitle] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setshowSubtitle(true)
    }, 600)

    setTimeout(() => {
      setshowTitle(true)
    }, 700)
  }, [])

  return (
    <Hero isHidden={isHidden}>
      <TextMask show={showSubtitle}>
        <HeroSubtitle>Engineer. Mixer. Producer</HeroSubtitle>
      </TextMask>
      <TextMask show={showTitle}>
        <HeroTitle>Toby Hulbert</HeroTitle>
      </TextMask>
    </Hero>
  )
}

export { ThisHero as Hero }
