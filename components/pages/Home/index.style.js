import styled from 'styled-components'
import { pxToRem, Luna, LunaMedia } from '../../../Luna'

const MenuToggle = styled.button`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: ${pxToRem(80)};
  height: ${pxToRem('default', 2.5)};
  padding: 0 ${pxToRem(8)};
  z-index: ${Luna.layout.zIndex.menuToggle};
  overflow: hidden;
  border-width: 0 ${pxToRem(2)} ${pxToRem(2)} ${pxToRem(2)};
  border: none;
  border-radius: 0 0 ${pxToRem(24)} ${pxToRem(24)};
  background: ${Luna.color.background};

  ${LunaMedia.above('large')`
    display: none;
  `}

  :hover,
  :focus {
    outline: none;
  }
`

const MenuToggleText = styled.p`
  position: absolute;
  top: 100%;
  right: 100%;
`

const HomeMain = styled.div``

const HomeSection = styled.div`
  position: relative;
  width: 100%;
  padding-left: ${pxToRem('default', 1)};
  padding-right: ${pxToRem('default', 1)};
  padding-bottom: 10vh;

  ${LunaMedia.above('large')`
    width: calc(100% - ${pxToRem(400)});
    max-width: ${pxToRem(650)};
    margin-left: auto;
    margin-right: auto;
  `}
`

export { MenuToggle, MenuToggleText, HomeMain, HomeSection }
