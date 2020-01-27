import styled from 'styled-components'
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

const HeroTitle = styled.h1`
  justify-self: center;
  font-size: 40px;
  line-height: 1.1;
  font-weight: ${Luna.font.weight.bold};
  text-align: center;

  ${LunaMedia.above('medium')`
    font-size: 70px;
  `}
`

const HeroSubtitle = styled.h2`
  font-family: ${Luna.font.family.brand};
  font-size: 24px;
  color: ${Luna.color.grey.base};
  text-align: center;

  ${LunaMedia.above('medium')`
    font-size: 38px;
  `}
`

export { Hero, HeroTitle, HeroSubtitle }
