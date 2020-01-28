import { NavigationLink } from '../NavigationLink'
import { Navigation } from './index.style'

const ThisNavigation = ({ menuIsOpen }) => (
  <Navigation menuIsOpen={menuIsOpen} data-test={menuIsOpen}>
    <NavigationLink
      href="#work"
      text="Projects"
      width={90}
      svg="sine"
      svgWidth={100}
      svgHeight={18}
      position="topLeft"
    />

    <NavigationLink
      href="#about"
      text="About"
      width={74}
      svg="triangle"
      svgWidth={84}
      svgHeight={18}
      position="topRight"
    />

    <NavigationLink
      href="#contact"
      text="Contact"
      width={100}
      svg="square"
      svgWidth={108}
      svgHeight={18}
      position="bottomLeft"
    />
  </Navigation>
)

export { ThisNavigation as Navigation }
