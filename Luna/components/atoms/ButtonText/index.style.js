import styled from 'styled-components'
import { TextStyle } from '../../../config/textStyle'

const ButtonTextBase = styled.button`
  ${TextStyle.TextLink}
  border: none;
  background: none;
  padding: 0;
  margin: 0;

  :hover,
  :focus,
  :active {
    outline: 0;
  }
`

export { ButtonTextBase }
