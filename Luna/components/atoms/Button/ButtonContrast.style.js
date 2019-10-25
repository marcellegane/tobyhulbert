import styled, { css } from 'styled-components'
import { Button } from '../../../config/button'
import { ButtonBase } from './ButtonBase.style'

const ContrastStyle = css`
  background: ${Button.contrast.background};
  border-color: ${Button.contrast.borderColor};
  color: ${Button.contrast.color};
  :hover,
  :active,
  :focus {
    background: ${Button.contrast.psuedo.background};
    color: ${Button.contrast.psuedo.color};
    border-color: ${Button.contrast.psuedo.borderColor};
    opacity: ${Button.contrast.psuedo.opacity};
  }
  :disabled {
    color: ${Button.contrast.disabled.color};
    border-color: ${Button.contrast.disabled.borderColor};
    background-color: ${Button.contrast.disabled.backgroundColor};
    cursor: not-allowed;
  }
`

// this is just a copy of the pseudo active at the moment
const SelectedStyle = css`
  background: ${Button.contrast.psuedo.background};
  color: ${Button.contrast.psuedo.color};
  border-color: ${Button.contrast.psuedo.borderColor};
  opacity: ${Button.contrast.psuedo.opacity};
`

const ButtonContrast = styled.button`
  ${ButtonBase}
  ${ContrastStyle}
  ${props => (props.selected ? SelectedStyle : '')}
`

export { ButtonContrast }
