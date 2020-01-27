import { Hero, HeroTextMask, HeroTitle, HeroSubtitle } from './index.style'

const ThisHero = ({ isHidden, showText }) => (
  <Hero isHidden={isHidden}>
    <HeroTextMask>
      <HeroSubtitle showText={showText}>Engineer. Mixer. Producer</HeroSubtitle>
    </HeroTextMask>
    <HeroTextMask>
      <HeroTitle showText={showText}>Toby Hulbert</HeroTitle>
    </HeroTextMask>
  </Hero>
)

export { ThisHero as Hero }
