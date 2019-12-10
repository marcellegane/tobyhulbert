import styled from 'styled-components'
import { Layout } from '../../../config/layout'
import { pxToRem } from '../../../tools/calculate'

const Separator = styled.hr`
  border: none;
  height: ${pxToRem(2)};
  background-color: ${props => props.bgColor};
  margin-top: ${pxToRem('default', 0.5)};
`

export { Separator }
