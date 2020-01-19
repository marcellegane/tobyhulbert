import styled from 'styled-components'
import { Luna, pxToRem } from '../../Luna'

const NavigationLink = styled.a`
  position: fixed;
  padding: ${pxToRem(24)} ${pxToRem(36)} ${pxToRem(32)};
  z-index: 100;
  font-size: ${pxToRem(24)};
  font-weight: ${Luna.font.weight.bold};
  color: #5100ee;
  color: #0000EE;
  /* color: #2F7F6F; */
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
  transform: translateX(-50%);
  display: block;
  width: ${props => (props.width ? `${pxToRem(props.width)}` : pxToRem(100))};

  :before {
    content: '';
    display: block;
    width: 100%;
    height: 0;
    ${props => `
      padding-bottom: ${(props.svgHeight / props.svgWidth) * 100}%;
    `}
  }

  svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export { NavigationLink, NavigationLinkText, NavigationLinkUnderline }
