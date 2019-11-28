import styled from 'styled-components'
import { Layout } from '../../../config/layout'
import { pxToRem, LunaMedia } from '../../../tools'

const ContentWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: ${pxToRem(Layout.grid.unit)};
  padding-right: ${pxToRem(Layout.grid.unit)};

  ${LunaMedia.above('medium')`
    max-width: ${pxToRem(Layout.maxWidth.large + Layout.grid.unit * 2)};
  `}

  ${LunaMedia.above('xlarge')`
    max-width: ${pxToRem(Layout.maxWidth.large + Layout.grid.unit * 2)};
  `}
`

export { ContentWrapper }
