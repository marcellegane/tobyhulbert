import styled, { css } from 'styled-components'
import { Button } from '../../../config/button'
import { ButtonBase } from './ButtonBase.style'

const AlternativeStyle = css`
  background: ${Button.alternative.background};
  border-color: ${Button.alternative.borderColor};
  color: ${Button.alternative.color};
  :hover,
  :active,
  :focus {
    background: ${Button.alternative.psuedo.background};
    color: ${Button.alternative.psuedo.color};
    border-color: ${Button.alternative.psuedo.borderColor};
    opacity: ${Button.alternative.psuedo.opacity};
  }
  :disabled {
    color: ${Button.alternative.disabled.color};
    border-color: ${Button.alternative.disabled.borderColor};
    background-color: ${Button.alternative.disabled.backgroundColor};
    cursor: not-allowed;
  }
`
// this is just a copy of the pseudo active at the moment
const SelectedStyle = css`
  background: ${Button.alternative.psuedo.background};
  color: ${Button.alternative.psuedo.color};
  border-color: ${Button.alternative.psuedo.borderColor};
  opacity: ${Button.alternative.psuedo.opacity};
`

const ButtonAlternative = styled.button`
  ${ButtonBase}
  ${AlternativeStyle}
  ${props => (props.selected ? SelectedStyle : '')}
`

export { ButtonAlternative }
