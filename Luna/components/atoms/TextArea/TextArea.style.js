import styled from 'styled-components'
import Util from '../../../tools/util'
import { Form } from '../../../config/form'
import { Layout } from '../../../config/layout'
import { pixelMultiplier } from '../../../tools/calculate'

const TextAreaStyle = styled.textarea`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  border-radius: ${Form.base.borderRadius};
  border-width: ${Form.base.borderWidth};
  border-style: ${Form.base.borderStyle};
  padding-top: ${Form.base.paddingVertical};
  padding-bottom: ${Form.base.paddingVertical};
  padding-left: ${Form.base.paddingHorizontal};
  padding-right: ${Form.base.paddingHorizontal};
  margin-top: ${Form.base.marginVertical};
  margin-left: ${Form.base.marginHorizontal};
  margin-right: ${Form.base.marginHorizontal};
  font-size: ${Form.base.fontSize};
  font-family: ${Form.base.fontFamily};
  height: ${pixelMultiplier(Layout.grid.unit, 6)};
  resize: vertical;
  overflow: auto;
  box-sizing: border-box;
  background-color: ${props =>
    Util.calculateBackgroundColor(props.disabled, props.valid)};
  color: ${props => Util.calculateColor(props.disabled, props.valid)};
  border-color: ${props =>
    Util.calculateBorderColor(props.disabled, props.valid)};

  border-width: ${props =>
    props.valid ? Form.base.borderWidth : Form.validation.error.borderWidth};

  border-style: ${props =>
    props.valid ? Form.base.borderStyle : Form.validation.error.borderStyle};

  :focus,
  :active,
  :hover {
    outline: none;
    border-color: ${props =>
      !props.disabled ? Form.focus.borderColor : 'inherit'};
  }

  ::-webkit-input-placeholder {
    color: ${Form.base.placeholderColor};
  }

  :-ms-input-placeholder {
    color: ${Form.base.placeholderColor};
  }

  ::placeholder {
    color: ${Form.base.placeholderColor};
  }
`

export { TextAreaStyle }
