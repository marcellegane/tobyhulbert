import styled from 'styled-components'
import { pixelMultiplier } from '../../../tools'
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
	border-radius: 4px;
	border: 1px solid ${Luna.color.primary.accent};
	background-color: ${Luna.color.primary.accent};

	${RadioGroupOption} + ${RadioGroupOption} {
		border-left: 1px solid ${Luna.color.primary.accent};
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
	padding: ${pixelMultiplier(Luna.layout.grid.unit, 0.75)};
	${Luna.font.style.BodyCopy}
	font-weight: ${Luna.font.weight.medium};
	color: ${Luna.color.primary.accent};
	text-align: center;
	background-color: ${Luna.color.primary.contrast};

	${RadioGroupInput}:checked + & {
		color: ${Luna.color.primary.contrast};
		background-color: ${Luna.color.background};
	}
`

export { RadioGroup, RadioGroupOption, RadioGroupInput, RadioGroupLabel }