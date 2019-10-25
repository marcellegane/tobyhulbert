import styled from 'styled-components'
import { Color } from '../../../config/color'
import { Layout } from '../../../config/layout'
import { Font } from '../../../config/font'

const LabelStyle = styled.label`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  width: 100%;
  text-align: ${props => (props.center ? 'center' : 'left')};
  font-family: ${Font.family.brand};
  font-size: ${Font.size.small};
  color: ${props => (props.valid ? Color.foreground : Color.error.foreground)};
  font-weight: ${Font.weight.medium};
  margin-bottom: ${Layout.margin.default};
`
export { LabelStyle }
