import styled from 'styled-components'
import { Form } from '../../../config/form'
import Util from '../../../tools/util'
import { Luna } from '../../../config'
import { pxToRem } from '../../../tools'

const SelectStyle = styled.select`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  cursor: pointer;
  appearance: none;
  padding-top: ${pxToRem(Form.base.paddingVertical)};
  padding-bottom: ${pxToRem(Form.base.paddingVertical)};
  padding-left: ${pxToRem(Form.base.paddingHorizontal)};
  padding-right: ${pxToRem(Luna.layout.grid.unit, 2.5)};
  margin-left: ${pxToRem(Form.base.marginHorizontal)};
  margin-right: ${pxToRem(Form.base.marginHorizontal)};
  pointer-events: ${props => (!props.disabled ? 'auto' : 'none')};

  font-size: ${pxToRem(Form.base.fontSize)};
  font-family: ${Form.base.fontFamily};
  color: ${props => Util.calculateColor(props.disabled, props.valid)};

  background-image: ${props =>
    Util.calculateBackgroundImageArrowhead(props.disabled, props.valid)};
  background-color: ${props =>
    Util.calculateBackgroundColor(props.disabled, props.valid)};
  background-repeat: no-repeat;
  background-position: right ${pxToRem(16)} center;
  background-size: ${pxToRem(18)};
  border-radius: ${pxToRem(Form.base.borderRadius)};
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
