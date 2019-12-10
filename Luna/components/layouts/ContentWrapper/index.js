import styled from 'styled-components'
import { Layout } from '../../../config/layout'
import { pxToRem, LunaMedia } from '../../../tools'

const ContentWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: ${pxToRem('default')};
  padding-right: ${pxToRem('default')};

  ${LunaMedia.above('small')`
    max-width: calc(${pxToRem(Layout.maxWidth.large)} + 8vw);
    padding-left: 4vw;
    padding-right: 4vw;
  `}

  ${LunaMedia.above('maxWidthLarge')`
    max-width: calc(${pxToRem(Layout.maxWidth.large)} + 8vw);
    padding-left: 4vw;
    padding-right: 4vw;
  `}
`

export { ContentWrapper }
