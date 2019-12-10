import styled from 'styled-components'
import Util from '../../../tools/util'
import { Form } from '../../../config/form'
import { pxToRem } from '../../../tools/calculate'

const TextAreaStyle = styled.textarea`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  border-radius: ${pxToRem(Form.base.borderRadius)};
  border-width: ${pxToRem(Form.base.borderWidth)};
  border-style: ${Form.base.borderStyle};
  padding-top: ${pxToRem(Form.base.paddingVertical)};
  padding-bottom: ${pxToRem(Form.base.paddingVertical)};
  padding-left: ${pxToRem(Form.base.paddingHorizontal)};
  padding-right: ${pxToRem(Form.base.paddingHorizontal)};
  margin-top: ${pxToRem(Form.base.marginVertical)};
  margin-left: ${pxToRem(Form.base.marginHorizontal)};
  margin-right: ${pxToRem(Form.base.marginHorizontal)};
  font-size: ${pxToRem(Form.base.fontSize)};
  font-family: ${Form.base.fontFamily};
  height: ${pxToRem('default', 6)};
  resize: vertical;
  overflow: auto;

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
