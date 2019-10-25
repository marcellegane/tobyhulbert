import styled, { css } from 'styled-components'
import { Button } from '../../../config/button'
import { ButtonBase } from './ButtonBase.style'

const BrandStyle = css`
  background: ${Button.brand.background};
  border-color: ${Button.brand.borderColor};
  color: ${Button.brand.color};
  :hover,
  :active,
  :focus {
    background: ${Button.brand.psuedo.background};
    color: ${Button.brand.psuedo.color};
    border-color: ${Button.brand.psuedo.borderColor};
    opacity: ${Button.brand.psuedo.opacity};
  }
  :disabled {
    color: ${Button.brand.disabled.color};
    border-color: ${Button.brand.disabled.borderColor};
    background-color: ${Button.brand.disabled.backgroundColor};
    cursor: not-allowed;
  }
`

// this is just a copy of the pseudo active at the moment
const SelectedStyle = css`
  background: ${Button.brand.psuedo.background};
  color: ${Button.brand.psuedo.color};
  border-color: ${Button.brand.psuedo.borderColor};
  opacity: ${Button.brand.psuedo.opacity};
`

const ButtonBrand = styled.button`
  ${ButtonBase}
  ${BrandStyle}
  ${props => (props.selected ? SelectedStyle : '')}
`

export { ButtonBrand }
