import styled from 'styled-components'
import { LunaMedia } from '../../../tools'
import { Layout } from '../../../config/layout'

const TwoColumnLargeRightContainer = styled.div`
  max-width: ${Layout.maxWidth};
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`

const ColumnLeft = styled.div`
  width: 100%;

  ${LunaMedia.above('medium')`
        width: 50%;
    `}

  ${LunaMedia.above('large')`
        width: 29%;
        margin-right: 5%;
    `}
`

const ColumnRight = styled.div`
  width: 100%;

  ${LunaMedia.above('medium')`
        width: 50%;
    `}

  ${LunaMedia.above('large')`
        width: 66%;
    `}
`

export { TwoColumnLargeRightContainer, ColumnLeft, ColumnRight }
