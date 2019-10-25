import styled from 'styled-components'
import { Layout } from '../../../config/layout'
import { pixelMultiplier } from '../../../tools/calculate'

const Stack = styled.div`
  width: 100%;

  > * + * {
    margin-top: ${props =>
      `${pixelMultiplier(Layout.grid.unit, props.stackMultiplier)}`};
  }
`

export { Stack }
