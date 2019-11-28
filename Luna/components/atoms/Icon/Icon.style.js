import styled from 'styled-components'
import { Layout } from '../../../config/layout'
import { pxToRem } from '../../../tools'

const IconStyle = styled.i`
  position: relative;
  margin-right: ${pxToRem(Layout.grid.unit)};
`

export { IconStyle }
