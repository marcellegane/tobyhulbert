import styled from 'styled-components'
import { pixelMultiplier } from '../calculate'
import { Layout } from '../../config/layout'

const Spacer = styled.div`
  display: block;
  width: 100%;
  margin-bottom: ${props => pixelMultiplier(Layout.margin.default, props.spaceMultiplier)};
`
export { Spacer }
