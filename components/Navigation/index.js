import { NavigationLink } from '../NavigationLink'
import { Navigation } from './index.style'

const ThisNavigation = () => (
  <Navigation>
    <NavigationLink
      href="#"
      text="Projects"
      width={90}
      svg="sine"
      svgWidth={96}
      svgHeight={18}
      topLeft
    />

    <NavigationLink
      href="#"
      text="About"
      width={90}
      svg="sine"
      svgWidth={96}
      svgHeight={18}
      topRight
    />

    <NavigationLink
      href="#"
      text="Contact"
      width={90}
      svg="sine"
      svgWidth={96}
      svgHeight={18}
      bottomLeft
    />
  </Navigation>
)

export { ThisNavigation as Navigation }
