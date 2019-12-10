import styled from 'styled-components'
import { Layout } from '../../../config/layout'
import { pxToRem } from '../../../tools/calculate'

const Stack = styled.div`
	width: 100%;
	
    > * + * {
        margin-top: ${props => `${pxToRem('default', props.stackMultiplier)}`};
	};
`

export { Stack }
