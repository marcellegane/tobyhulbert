import styled from 'styled-components'
import { Luna } from '../../../config'
import { pxToRem } from '../../../tools/calculate'

const FormTitle = styled.h3`
  display: block;
  width: 100%;
  font-family: ${Luna.font.family.brand};
  font-size: ${pxToRem(Luna.font.size.large)};
  color: ${Luna.color.foreground};
`
export { FormTitle }
