import styled from 'styled-components'
import { Luna, pxToRem } from '../../Luna'

const About = styled.div`
  position: relative;
  width: calc(100% - ${pxToRem(400)});
  max-width: ${pxToRem(650)};
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10vh;
  background-color: ${Luna.color.background};
`

const AboutTitle = styled.h3`
  font-size: ${pxToRem(28)};
  font-weight: ${Luna.font.weight.bold};
`

const AboutText = styled.p``

export { About, AboutTitle, AboutText }
