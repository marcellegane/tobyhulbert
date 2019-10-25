import styled from 'styled-components'
import { Font } from '../../../config/font'

const ButtonTextBase = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  ${Font.style.TextLink}


  :hover, :focus, :active {
    outline: 0;
  }
`

export { ButtonTextBase }
