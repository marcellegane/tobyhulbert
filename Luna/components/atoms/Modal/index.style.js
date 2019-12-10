import styled from 'styled-components'
import { Border } from '../../../config/border'
import { Color } from '../../../config/color'
import { Font } from '../../../config/font'
import { pxToRem } from '../../../tools/calculate'

const Modal = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${pxToRem('default')};
  font-family: ${Font.family.brand};
  z-index: 999;
`

const ModalBg = styled.div`
  display: ${props => (props.show && props.showModalBg ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`

const ModalInner = styled.div`
  width: 100%;
  max-width: ${pxToRem(600)};
  ${props => (props.fullHeight ? 'height: 100%;' : '')}
  margin: ${props => (props.fullHeight ? 'inherit' : 'auto')};
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: ${pxToRem(Border.radius)};
  display: flex;
  flex-direction: column;
  background-color: ${Color.background};
  box-shadow: 0 0 ${pxToRem(13)} ${pxToRem(8)} rgba(0,0,0,0.36);
  font-family: ${Font.family.brand};
`

const ModalHeader = styled.div`
  padding: ${pxToRem('default')};
  border-top-left-radius: ${pxToRem(Border.radius)};
  border-top-right-radius: ${pxToRem(Border.radius)};

  p {
    color: ${Color.foreground};
    margin-top: 0;
    margin-bottom: ${pxToRem('default', 2)} !important;
    font-size: ${pxToRem(14)};
  }

  > :last-child {
    margin-bottom: 0;
  }
`

function getModalHeaderAlign(align) {
  const cssValues = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  }

  return cssValues[align]
}

const ModalHeading = styled.div``

const ModalTitle = styled.h2`
  font-family: ${Font.headings};
  color: ${Color.foreground};
  margin-bottom: ${pxToRem('default')};
  font-size: ${pxToRem(22)};
  display: flex;
  justify-content: ${props => getModalHeaderAlign(props.align)};
`

const ModalBody = styled.div`
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: ${pxToRem('default')};
  font-family: ${Font.family.brand};
`

const ModalBodyFullWidth = styled.div`
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
`

const ModalFooter = styled.div`
  background: ${Color.background};
  padding: ${pxToRem('default')};
  border-bottom-left-radius: ${pxToRem(Border.radius)};
  border-bottom-right-radius: ${pxToRem(Border.radius)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${Font.family.brand};
`

const ModalClose = styled.span`
  font-size: ${pxToRem(16)};
  color: ${props => props.closeColor};
  font-family: ${Font.family.brand};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  cursor: pointer;
`

const ModalCloseText = styled.span`
  margin-right: ${pxToRem('default', 0.5)};
`

const ModalBodyText = styled.p`
  font-size: ${pxToRem(14)};
  font-family: ${Font.family.brand};
  font-weight: 300;
  color: ${Color.foreground};
  display: flex;
  flex-direction: column;
  padding-left: ${pxToRem('default')};
  padding-right: ${pxToRem('default')};
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
  align-content: center;
  line-height: ${pxToRem(24)};
  text-align: ${props => (props.center ? 'center' : 'flex-start')};
  margin-top: 0;
  margin-bottom: ${pxToRem('default', 1)};
`

export {
  Modal,
  ModalBg,
  ModalInner,
  ModalHeader,
  ModalTitle,
  ModalHeading,
  ModalBody,
  ModalBodyFullWidth,
  ModalFooter,
  ModalClose,
  ModalCloseText,
  ModalBodyText,
}
