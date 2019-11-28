import styled from 'styled-components'
import { Border } from '../../../config/border'
import { Color } from '../../../config/color'
import { Form } from '../../../config/form'
import { Layout } from '../../../config/layout'
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
  padding-top: ${pxToRem(Layout.grid.unit, 0.5)};
  padding-bottom: ${pxToRem(Layout.grid.unit, 0.5)};
  padding-left: ${pxToRem(Layout.grid.unit, 1)};
  padding-right: ${pxToRem(Layout.grid.unit, 1)};
`

export { SuccessMessage }
