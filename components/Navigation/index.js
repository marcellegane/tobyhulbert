import {
  Navigation,
  NavigationLink,
  NavigationLinkText,
  NavigationLinkUnderline,
} from './index.style'
import { SineWave } from '../svgs/SineWave'
import { SquareWave } from '../svgs/SquareWave'
import { TriangleWave } from '../svgs/TriangleWave'

const ThisNavigation = () => (
  <Navigation>
    <NavigationLink href="#" topLeft>
      <NavigationLinkText>Projects</NavigationLinkText>
      <NavigationLinkUnderline width={100}>
        <SineWave />
      </NavigationLinkUnderline>
    </NavigationLink>
    <NavigationLink href="#" topRight>
      <NavigationLinkText>About</NavigationLinkText>
      <NavigationLinkUnderline width={80}>
        <TriangleWave />
      </NavigationLinkUnderline>
    </NavigationLink>
    <NavigationLink href="#" bottomLeft>
      <NavigationLinkText>Contact</NavigationLinkText>
      <NavigationLinkUnderline>
        <SquareWave />
      </NavigationLinkUnderline>
    </NavigationLink>
  </Navigation>
)

export { ThisNavigation as Navigation }
