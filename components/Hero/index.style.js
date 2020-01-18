import styled from 'styled-components'
import { Luna } from '../../Luna'

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
  height: 100vh;
`

const HeroTitle = styled.h1`
  justify-self: center;
  font-size: 70px;
  line-height: 1.1;
  font-weight: ${Luna.font.weight.bold};
`

const HeroSubtitle = styled.h2`
  font-family: ${Luna.font.family.brand};
  font-size: 38px;
  color: ${Luna.color.grey.base};
  text-align: center;
`

export { Hero, HeroTitle, HeroSubtitle }
