import styled, { css } from 'styled-components'
import { Button } from '../../../config/button'
import { ButtonBase } from './ButtonBase.style'

const AccentStyle = css`
  background: ${Button.accent.background};
  border-color: ${Button.accent.borderColor};
  color: ${Button.accent.color};
  :hover,
  :active,
  :focus {
    background: ${Button.accent.psuedo.background};
    color: ${Button.accent.psuedo.color};
    border-color: ${Button.accent.psuedo.borderColor};
    opacity: ${Button.accent.psuedo.opacity};
  }
  :disabled {
    color: ${Button.accent.disabled.color};
    border-color: ${Button.accent.disabled.borderColor};
    background-color: ${Button.accent.disabled.backgroundColor};
    cursor: not-allowed;
  }
`
// this is just a copy of the pseudo active at the moment
const SelectedStyle = css`
  background: ${Button.accent.psuedo.background};
  color: ${Button.accent.psuedo.color};
  border-color: ${Button.accent.psuedo.borderColor};
  opacity: ${Button.accent.psuedo.opacity};
`

const ButtonAccent = styled.button`
  ${ButtonBase}
  ${AccentStyle}
  ${props => (props.selected ? SelectedStyle : '')}
`

export { ButtonAccent }
