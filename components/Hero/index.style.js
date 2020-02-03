import styled, { css } from 'styled-components'
import { Luna, LunaMedia } from '../../Luna'

const Hero = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  padding: 1em;
  opacity: ${props => (props.isHidden ? '0' : '1')};
  transition: opacity 0.2s ease-out;
`

const minVw = 23.4375
const maxVw = 60
let minFontSize = 2.75
let maxFontSize = 4.375

const HeroTitle = styled.h1`
  justify-self: center;
  font-size: ${minFontSize}rem;
  font-weight: ${Luna.font.weight.bold};
  text-align: center;
  transition-delay: 0.1s;

  ${LunaMedia.above('xxsmall')`
    font-size: calc(${minFontSize}rem + ((100vw - ${minVw}rem) / (${maxVw} - ${minVw})) * (${maxFontSize} - ${minFontSize}));
  `}

  ${LunaMedia.above('large')`
    font-size: ${maxFontSize}rem;
  `}
`

minFontSize = 1.5
maxFontSize = 2.375

const HeroSubtitle = styled.h2`
  font-family: ${Luna.font.family.brand};
  font-size: ${minFontSize}rem;
  color: ${Luna.color.grey.base};
  text-align: center;

  ${LunaMedia.above('xxsmall')`
    font-size: calc(${minFontSize}rem + ((100vw - ${minVw}rem) / (${maxVw} - ${minVw})) * (${maxFontSize} - ${minFontSize}));
  `}

  ${LunaMedia.above('large')`
    font-size: ${maxFontSize}rem;
  `}
`

export { Hero, HeroTitle, HeroSubtitle }
