import styled from 'styled-components'
import Util from '../../../tools/util'
import { Font } from '../../../config/font'
import { Color } from '../../../config/color'
import { Layout } from '../../../config/layout'
import { pixelMultiplier } from '../../../tools/calculate'
import { Checkbox } from './Checkbox.style'

const CheckboxWithLabel = styled.div`
  position: relative;
  overflow: hidden;

  ${Checkbox} {
    position: absolute;
    transform: translateX(-200%);
  }
`

const CheckboxLabel = styled.label`
	position: relative;
	padding-left: ${pixelMultiplier(Layout.padding.default, 2)};
  ${Font.style.BodyCopy}
	color: ${Color.primary.contrast};

	:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		display: block;
		width: ${pixelMultiplier(Layout.padding.default, 1.5)};
		height: ${pixelMultiplier(Layout.padding.default, 1.5)};
		border: 1px solid ${Color.neutral};
		border-radius: 4px;
		background-image: ${props =>
      props.checked ? Util.getBackgroundImageTick() : 'url()'};
		background-repeat: no-repeat;
		background-position: center;

		${Checkbox}:focus + & {
			background-color: ${Color.neutral};
		}
	}
`

export { CheckboxWithLabel, CheckboxLabel }
