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

const ContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${pxToRem(16)};
  margin-left: ${pxToRem(-16)};
  margin-right: ${pxToRem(-16)};
  padding: 0;
  list-style: none;
`

const ContactListItem = styled.li`
  padding: ${pxToRem(8)} ${pxToRem(16)};
`

const ContactLink = styled.a`
  position: relative;
  display: block;
  padding: 0;
  font-size: ${pxToRem(24)};
  font-weight: ${Luna.font.weight.bold};
  line-height: 1.3;
  color: ${Luna.color.tertiary.dark};
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    height: ${pxToRem(3)};
    background-color: ${Luna.color.tertiary.dark};
    transition: transform 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  &:hover:before,
  &:focus:before {
    transform: scaleX(0.75);
  }
`

export {
  Contact,
  ContactTitle,
  ContactText,
  ContactList,
  ContactListItem,
  ContactLink,
}
