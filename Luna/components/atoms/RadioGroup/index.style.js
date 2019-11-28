import styled from 'styled-components'
import { pxToRem } from '../../../tools'
import { Luna } from '../../../config'

const RadioGroupOption = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
`

const RadioGroup = styled.div`
	display: flex;
	align-items: stretch;
	justify-content: flex-start;
	overflow: hidden;
	border-radius: ${pxToRem(4)};
	border: ${pxToRem(1)} solid ${Luna.color.background};
	background-color: ${Luna.color.primary.brand};

	${RadioGroupOption} + ${RadioGroupOption} {
		border-left: ${pxToRem(1)} solid ${Luna.color.background};
	}
`

const RadioGroupInput = styled.input`
  position: absolute;
  top: -100%;
  left: -100%;
`

const RadioGroupLabel = styled.label`
	display: block;
	width: 100%;
	padding: ${pxToRem(Luna.layout.grid.unit, 0.75)};
	${Luna.TextStyle.BodyCopy}
	font-weight: ${Luna.font.weight.medium};
	color: ${Luna.color.background};
	text-align: center;
	background-color: ${Luna.color.primary.brand};

	${RadioGroupInput}:checked + & {
		color: ${Luna.color.primary.brand};
		background-color: ${Luna.color.background};
	}
`

export { RadioGroup, RadioGroupOption, RadioGroupInput, RadioGroupLabel }
