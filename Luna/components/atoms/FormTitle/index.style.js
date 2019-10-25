import styled from 'styled-components'
import { Luna } from '../../../config'
import { pixelMultiplier } from '../../../tools/calculate'

const FormTitle = styled.h3`
  ${Luna.font.style.large}
  font-size: 30px;
  color: ${Luna.color.primary.brand};
  display: block;
  width: 100%;
  margin-bottom: ${pixelMultiplier(Luna.layout.margin.default, 1)};
`
export { FormTitle }
