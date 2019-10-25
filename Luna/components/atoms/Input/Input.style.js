import styled from 'styled-components'
import Util from '../../../tools/util'
import { Form } from '../../../config/form'

const InputStyle = styled.input`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
  font-family: ${Form.base.fontFamily};
  font-size: ${Form.base.fontSize};
  border-radius: ${Form.base.borderRadius};
  padding-top: ${Form.base.paddingVertical};
  padding-bottom: ${Form.base.paddingVertical};
  padding-left: ${Form.base.paddingHorizontal};
  padding-right: ${props =>
    props.iconSuffix ? '40px ' : Form.base.paddingHorizontal};
  margin-left: ${Form.base.marginHorizontal};
  margin-right: ${Form.base.marginHorizontal};
  text-align: ${props => (props.centerText ? 'center' : 'left')};

  ${props =>
    props.iconSuffix === 'pin' &&
    `background-image: ${Util.getBackgroundMapPinImage()}
        background-position: 95% 50%;
        background-repeat: no-repeat;`}

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
    outline: none;
    border-color: ${props =>
      Util.calculateBorderColor(props.disabled, props.valid)};
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
