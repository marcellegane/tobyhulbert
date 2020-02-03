import { Hero, HeroTitle, HeroSubtitle } from './index.style'
import { TextMask } from '../TextMask'

const ThisHero = ({ isHidden, showText }) => (
  <Hero isHidden={isHidden}>
    <TextMask show={showText}>
      <HeroSubtitle>Engineer. Mixer. Producer</HeroSubtitle>
    </TextMask>
    <TextMask show={showText}>
      <HeroTitle>Toby Hulbert</HeroTitle>
    </TextMask>
  </Hero>
)

export { ThisHero as Hero }
