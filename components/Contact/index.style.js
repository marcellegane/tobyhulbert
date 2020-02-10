import styled, { keyframes } from 'styled-components'
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
  margin-left: ${pxToRem(-8)};
  margin-right: ${pxToRem(-8)};
  padding: 0;
  list-style: none;
`

const ContactListItem = styled.li`
  padding: ${pxToRem(8)};
`

const slide = keyframes`
  0% {
    transform-origin: 100% 50%;
    transform: scaleX(1)
  }
  50% {
    transform-origin: 100% 50%;
    transform: scaleX(0)
  }
  51% {
    transform-origin: 0% 50%;
    transform: scaleX(0)
  }
  100% {
    transform-origin: 0% 50%;
    transform: scaleX(1)
  }
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
    transform-origin: 100% 50%;
    transition: transform 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  &:hover:before,
  &:focus:before {
    animation: ${slide} 1s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
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
