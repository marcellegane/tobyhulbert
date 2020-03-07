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
    transform: ${props =>
      props.menuIsOpen ? 'translateY(0)' : 'translateY(-100%)'};
    background: ${Luna.color.background};
    transition: all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  `}
`

export { Navigation }
