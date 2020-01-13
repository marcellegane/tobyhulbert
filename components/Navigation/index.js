import { Navigation, NavigationLink } from './index.style'

const ThisNavigation = () => (
  <Navigation>
    <NavigationLink href="#" topLeft>Projects</NavigationLink>
    <NavigationLink href="#" topRight>Bio</NavigationLink>
    <NavigationLink href="#" bottomLeft>Contact</NavigationLink>
  </Navigation>
)

export { ThisNavigation as Navigation }