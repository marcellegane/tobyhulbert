import styled from 'styled-components'
import { pxToRem } from '../../../tools/calculate'
import { Color } from '../../../config/color'
import { TextStyle } from '../../../config/textStyle'

const AccordionItem = styled.div`
  & + & {
    margin-top: ${pxToRem(21)};
  }
`

const AccordionItemHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: ${pxToRem(8)};
  padding-right: ${pxToRem(5)};
  padding-bottom: ${pxToRem(8)};
  padding-left: 0;
  border: none;
  border-bottom: ${pxToRem(1)} solid ${Color.primary.brand};
  background: transparent;

  :hover,
  :focus,
  :active {
    outline: none;
    cursor: pointer;
    color: ${Color.secondary.contrast};
  }

  color: ${Color.primary.brand};
`

const AccordionItemLabel = styled.div`
  margin-right: ${pxToRem(8)};
  ${TextStyle.Large}
  color: currentColor;
  transition: color 0.3s ease;
`

const AccordionItemIcon = styled.div`
  transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
`

const AccordionItemMain = styled.div`
  display: none;
  overflow: hidden;
`

const AccordionItemContent = styled.div`
  opacity: 0;
`

export {
  AccordionItem,
  AccordionItemHeader,
  AccordionItemLabel,
  AccordionItemIcon,
  AccordionItemMain,
  AccordionItemContent,
}
