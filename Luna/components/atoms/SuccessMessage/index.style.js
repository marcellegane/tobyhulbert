import styled from 'styled-components'
import { Border } from '../../../config/border'
import { Color } from '../../../config/color'
import { Form } from '../../../config/form'
import { Layout } from '../../../config/layout'
import { pixelMultiplier } from '../../../tools/calculate'

const SuccessMessage = styled.p`
  text-decoration: none;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  font-style: normal;
  flex-direction: column;
  color: ${Color.success.foreground};
  background: ${Color.success.background};
  border-radius: ${Border.radius};
  font-size: ${Form.validation.fontSize};
  font-weight: 300;
  padding-top: ${pixelMultiplier(Layout.padding.default, 0.5)};
  padding-bottom: ${pixelMultiplier(Layout.padding.default, 0.5)};
  padding-left: ${pixelMultiplier(Layout.padding.default, 1)};
  padding-right: ${pixelMultiplier(Layout.padding.default, 1)};
  margin-bottom: ${pixelMultiplier(Layout.margin.default, 2)};
`

export { SuccessMessage }
