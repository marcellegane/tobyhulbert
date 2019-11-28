import styled from 'styled-components'
import { pxToRem } from '../../../tools'

const IconWrapper = styled.div`
  position: relative;
  width: ${props => pxToRem(props.width)};
  height: ${props => pxToRem(props.height)};

  svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

export { IconWrapper }
