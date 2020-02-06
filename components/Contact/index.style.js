import styled from 'styled-components'
import { pxToRem, Luna } from '../../Luna'

const Contact = styled.div``

const ContactTitle = styled.h3`
  font-size: ${pxToRem(28)};
  font-weight: ${Luna.font.weight.bold};
`

const ContactText = styled.p`
  font-size: ${pxToRem(21)};
`

export { Contact, ContactTitle, ContactText }
