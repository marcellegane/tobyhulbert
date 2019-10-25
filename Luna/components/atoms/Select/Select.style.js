import styled from 'styled-components'
import { Form } from '../../../config/form'
import Util from '../../../tools/util'

const SelectStyle = styled.select`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  cursor: pointer;
  appearance: none;
  padding-top: ${Form.base.paddingVertical};
  padding-bottom: ${Form.base.paddingVertical};
  padding-left: ${Form.base.paddingHorizontal};
  padding-right: ${Form.base.paddingHorizontal};
  margin-left: ${Form.base.marginHorizontal};
  margin-right: ${Form.base.marginHorizontal};
  pointer-events: ${props => (!props.disabled ? 'auto' : 'none')};

  font-size: ${Form.base.fontSize};
  font-family: ${Form.base.fontFamily};
  color: ${props => Util.calculateColor(props.disabled, props.valid)};

  background-image: ${props =>
    Util.calculateBackgroundImageArrowhead(props.disabled, props.valid)};
  background-color: ${props =>
    Util.calculateBackgroundColor(props.disabled, props.valid)};
  background-repeat: no-repeat;
  background-position-x: 94%;
  background-position-y: 50%;
  background-size: 18px;
  border-radius: ${Form.base.borderRadius};
  border-color: ${props =>
    Util.calculateBorderColor(props.disabled, props.valid)};
  border-width: ${props =>
    props.valid ? Form.base.borderWidth : Form.validation.error.borderWidth};
  border-style: ${props =>
    props.valid ? Form.base.borderStyle : Form.validation.error.borderStyle};

  /* CAUTION: IE hackery ahead */
  ::-ms-expand {
    display: none; /* remove default arrow on ie10 and ie11 */
  }

  :focus,
  :active,
  :hover {
    outline: none;
    border-color: ${Form.focus.borderColor};
  }
`

const Option = styled.option`
  color: ${Form.base.color};
`

export { SelectStyle as Select, Option }
