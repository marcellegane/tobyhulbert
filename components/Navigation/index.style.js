import styled from 'styled-components'
import { LunaMedia, Luna } from '../../Luna'

const Navigation = styled.nav`
  ${LunaMedia.below('large')`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    z-index: ${Luna.layout.zIndex.nav};
    pointer-events: ${props => (props.menuIsOpen ? `visible` : `none`)};
    opacity: ${props => (props.menuIsOpen ? 1 : 0)};
    background: ${Luna.color.background};
  `}
`

export { Navigation }
