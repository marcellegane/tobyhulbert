import styled from 'styled-components'
import { Luna } from '../../Luna'

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
`

const NavigationLink = styled.a`
  position: absolute;
  padding: 2em;
  z-index: 100;
  font-weight: ${Luna.font.weight.bold};

  ${props => (props.topLeft && `
    top: 0;
    left: 0;
  `)}

  ${props => (props.topRight && `
    top: 0;
    right: 0;
  `)}

  ${props => (props.bottomLeft && `
    bottom: 0;
    left: 0;
  `)}
`

export { Navigation, NavigationLink }