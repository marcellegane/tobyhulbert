import styled from 'styled-components'

const TextMask = styled.div`
  position: relative;
  overflow: hidden;
`

const TextMaskContent = styled.div`
  transform: ${props => (props.show ? `translateY(0)` : `translateY(110%)`)};
  transition: transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
`

export { TextMask, TextMaskContent }
