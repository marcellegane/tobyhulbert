import styled from 'styled-components'
import Util from '../../../tools/util'
import { Form } from '../../../config/form'
import { pxToRem } from '../../../tools'

const InputStyle = styled.input`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;

  font-family: ${Form.base.fontFamily};
  font-size: ${pxToRem(Form.base.fontSize)};
  border-radius: ${pxToRem(Form.base.borderRadius)};
  padding-top: ${pxToRem(Form.base.paddingVertical)};
  padding-bottom: ${pxToRem(Form.base.paddingVertical)};
  padding-left: ${pxToRem(Form.base.paddingHorizontal)};
  padding-right: ${props =>
    props.iconSuffix
      ? `${pxToRem(40)} `
      : pxToRem(Form.base.paddingHorizontal)};
  margin-left: ${pxToRem(Form.base.marginHorizontal)};
  margin-right: ${pxToRem(Form.base.marginHorizontal)};
  text-align: ${props => (props.centerText ? 'center' : 'left')};

  ::-webkit-input-placeholder {
    color: ${Form.base.placeholderColor};
  }

  :-ms-input-placeholder {
    color: ${Form.base.placeholderColor};
  }

  ::placeholder {
    color: ${Form.base.placeholderColor};
  }

  :focus,
  :active,
  :hover {
    background-color: ${Form.focus.backgroundColor};
    outline: none;
    border-color: ${props =>
      props.valid
        ? Form.focus.borderColor
        : Util.calculateBorderColor(props.disabled, props.valid)};
  }

  background-color: ${props =>
    Util.calculateBackgroundColor(props.disabled, props.valid)};
  color: ${props => Util.calculateColor(props.disabled, props.valid)};
  border-color: ${props =>
    Util.calculateBorderColor(props.disabled, props.valid)};

  border-width: ${props =>
    props.valid ? Form.base.borderWidth : Form.validation.error.borderWidth};

  border-style: ${props =>
    props.valid ? Form.base.borderStyle : Form.validation.error.borderStyle};
`

export { InputStyle as Input }
