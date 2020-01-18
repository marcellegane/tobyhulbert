import styled from 'styled-components'
import { Luna, pxToRem } from '../../Luna'

const Navigation = styled.nav``

const NavigationLink = styled.a`
  position: fixed;
  padding: ${pxToRem(24)} ${pxToRem(36)} ${pxToRem(32)};
  z-index: 100;
  font-size: ${pxToRem(24)};
  font-weight: ${Luna.font.weight.bold};
  color: ${Luna.color.secondary.base};
  text-decoration: none;

  ${props =>
    props.topLeft &&
    `
    top: 0;
    left: 0;
  `}

  ${props =>
    props.topRight &&
    `
    top: 0;
    right: 0;
  `}

  ${props =>
    props.bottomLeft &&
    `
    bottom: 0;
    left: 0;
  `}
`

const NavigationLinkText = styled.span`
  display: block;
  padding-bottom: ${pxToRem(18)};
`

const NavigationLinkUnderline = styled.span`
  position: absolute;
  bottom: ${pxToRem(32)};
  left: 50%;
  transform: ${props =>
    props.scale
      ? `translateX(-50%) scale(${props.scale})`
      : `translateX(-50%) scale(0.9)`};
  display: block;
  width: ${props => (props.width ? `${pxToRem(props.width)}` : pxToRem(100))};
  height: ${pxToRem(18)};
  overflow: hidden;

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export {
  Navigation,
  NavigationLink,
  NavigationLinkText,
  NavigationLinkUnderline,
}
