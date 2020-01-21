import { Hero, HeroTitle, HeroSubtitle } from './index.style'

const ThisHero = ({ isHidden }) => (
  <Hero isHidden={isHidden}>
    <HeroSubtitle>Engineer. Mixer. Producer</HeroSubtitle>
    <HeroTitle>Toby Hulbert</HeroTitle>
  </Hero>
)

export { ThisHero as Hero }
