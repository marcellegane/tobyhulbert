import styled from 'styled-components'
import { Border } from '../../../config/border'
import { Color } from '../../../config/color'
import { Form } from '../../../config/form'
import { pxToRem } from '../../../tools/calculate'

const SuccessMessage = styled.p`
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-style: normal;
  flex-direction: column;
  color: ${Color.success.foreground};
  background: ${Color.success.background};
  border-radius: ${pxToRem(Border.radius)};
  font-size: ${pxToRem(Form.validation.fontSize)};
  font-weight: 300;
  padding-top: ${pxToRem('default', 0.5)};
  padding-bottom: ${pxToRem('default', 0.5)};
  padding-left: ${pxToRem('default', 1)};
  padding-right: ${pxToRem('default', 1)};
`

export { SuccessMessage }
