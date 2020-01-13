import styled from 'styled-components'
import { Luna } from '../../Luna'

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 75vh;
`

const HomeTitle = styled.h1`
  justify-self: center;
  font-size: 90px;
  font-weight: ${Luna.font.weight.bold};
`

const HomeSubtitle = styled.h2`
  font-family: ${Luna.font.family.brand};
  font-size: 28px;
  color: #a3a5a4;
  text-align: center;
`

export { Home, HomeTitle, HomeSubtitle }
