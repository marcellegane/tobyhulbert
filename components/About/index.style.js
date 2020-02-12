import styled from 'styled-components'
import { Luna, pxToRem, LunaMedia } from '../../Luna'

const About = styled.div`
  position: relative;
  width: 100%;
  padding-left: ${pxToRem('default', 1)};
  padding-right: ${pxToRem('default', 1)};
  padding-bottom: 10vh;

  ${LunaMedia.above('large')`
    width: calc(100% - ${pxToRem(400)});
    max-width: ${pxToRem(650)};
    margin-left: auto;
    margin-right: auto;
  `}
`

const AboutTitle = styled.h3`
  font-size: ${pxToRem(28)};
  font-weight: ${Luna.font.weight.bold};
`

const AboutText = styled.p`
  font-family: ${Luna.font.family.body};
  font-size: 1.125rem;
`

export { About, AboutTitle, AboutText }
