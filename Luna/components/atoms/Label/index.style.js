import styled, { css } from 'styled-components'
import { Color } from '../../../config/color'
import { Font } from '../../../config/font'
import { pxToRem } from '../../../tools/calculate'

function applyHiddenStyles() {
  return css`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  `
}

const LabelStyle = styled.label`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  width: 100%;
  text-align: ${props => (props.center ? 'center' : 'left')};
  font-family: ${Font.family.brand};
  font-size: ${pxToRem(Font.size.bodyCopy)};
  color: ${props => (props.valid ? Color.foreground : Color.error.background)};
  font-weight: normal;

  ${props => (props.hideThis ? applyHiddenStyles() : '')}
`
export { LabelStyle }
