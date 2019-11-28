import styled from 'styled-components'
import { pxToRem } from '../calculate'
import { Layout } from '../../config/layout'

const Spacer = styled.div`
  display: block;
  width: 100%;
  height: ${props => pxToRem(Layout.grid.unit, props.spaceMultiplier)};
`
export { Spacer }
