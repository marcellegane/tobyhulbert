import styled from 'styled-components'
import { Luna, pxToRem } from '../../Luna'

const NavigationLink = styled.a`
  position: fixed;
  padding: ${pxToRem(24)} ${pxToRem(36)} ${pxToRem(32)};
  z-index: 100;
  font-size: ${pxToRem(24)};
  font-weight: ${Luna.font.weight.bold};
  color: ${Luna.color.secondary.one};
  text-decoration: none;

  ${props => {
    const { position } = props
    if (position === 'topLeft') {
      return `
        top: 0;
        left: 0;
      `
    }
    if (position === 'topRight') {
      return `
        top: 0;
        right: 0;
      `
    }
    if (position === 'bottomLeft') {
      return `
        bottom: 0;
        left: 0;
      `
    }
  }}
`

const NavigationLinkText = styled.span`
  display: block;
  padding-bottom: ${pxToRem(18)};
  opacity: 0;
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

  path {
    opacity: 0;
  }
`

export { NavigationLink, NavigationLinkText, NavigationLinkUnderline }
