import styled from 'styled-components'
import { Luna, pxToRem, LunaMedia } from '../../Luna'

const NavigationLink = styled.a`
  position: relative;
  color: ${Luna.color.secondary.one};
  text-decoration: none;

  ${LunaMedia.below('large')`
    opacity: ${props => (props.menuIsOpen ? 1 : 0)};
    transform: ${props =>
      props.menuIsOpen ? 'translateY(0)' : 'translateY(-150%)'};
    transition: ${props =>
      props.menuIsOpen
        ? `all ${0.2 +
            props.index * 0.1}s cubic-bezier(0.65, 0.05, 0.36, 1) 0.2s`
        : `all 0.05s cubic-bezier(0.65, 0.05, 0.36, 1)`};

    & + & {
      margin-top: 1.5em;
    }
  `}

  ${LunaMedia.above('large')`
    position: fixed;
    padding: ${pxToRem('default', 1.5)} ${pxToRem('default', 1.75)} ${pxToRem(
    'default',
    2
  )};
    z-index: ${Luna.layout.zIndex.nav};
  `}

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

const NavigationLinkMain = styled.div`
  position: relative;
  padding-bottom: ${pxToRem(18)};
`

const NavigationLinkText = styled.span`
  display: block;
  font-size: ${pxToRem(24)};
  font-weight: ${Luna.font.weight.bold};
`

const NavigationLinkUnderline = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 100%;

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

export {
  NavigationLink,
  NavigationLinkMain,
  NavigationLinkText,
  NavigationLinkUnderline,
}
