import styled from 'styled-components'
import { pxToRem, LunaMedia } from '../../Luna'

const Work = styled.div`
  position: relative;
  width: calc(100% - 4vw);
  margin-left: auto;
  margin-right: auto;
  padding-left: ${pxToRem('default', 0.5)};
  padding-right: ${pxToRem('default', 0.5)};
  padding-bottom: 10vh;

  ${LunaMedia.above('large')`
    width: calc(100% - 30vw);
  `}
`

const WorkGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${LunaMedia.above('small')`
    justify-content: flex-start;
  `}

  :nth-child(2) {
    margin-top: ${pxToRem('default', 6)};
  }
`

export { Work, WorkGrid }
