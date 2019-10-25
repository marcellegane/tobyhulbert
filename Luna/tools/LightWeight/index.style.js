import styled from 'styled-components'
import { Luna } from '../../config'
import { pixelMultiplier } from "../calculate"

const LightWeight = styled.span`
  font-weight: 300;
  margin-left: ${props => props.nudgeRight ? pixelMultiplier(Luna.layout.margin.default, 0.5) : '0'};
`
export { LightWeight }
