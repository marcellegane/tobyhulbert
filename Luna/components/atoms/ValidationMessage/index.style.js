import styled from 'styled-components'
import { Border } from '../../../config/border'
import { Color } from '../../../config/color'
import { Form } from '../../../config/form'
import { Layout } from '../../../config/layout'
import { pxToRem } from '../../../tools/calculate'

const ValidationMessage = styled.p`
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: ${pxToRem('default', 0.5)};
  font-style: normal;
  flex-direction: column;
  color: ${Color.background};
  border-radius: ${pxToRem(Border.radius)};
  font-size: ${pxToRem(Form.validation.fontSize)};
  font-weight: 300;
`

export { ValidationMessage }
