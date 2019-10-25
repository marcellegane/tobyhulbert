import styled from 'styled-components'
import { Layout } from "../../../config/layout"
import { pixelMultiplier } from '../../../tools/calculate'

const Separator = styled.hr`
	border: none;
	height: 2px;
	background-color: ${props => props.bgColor};
	margin-top: ${pixelMultiplier(Layout.margin.default, 0.5)};
`

export { Separator }
