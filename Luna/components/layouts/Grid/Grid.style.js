import styled from 'styled-components'
import { Layout } from '../../../config/layout'
import { pxToRem } from '../../../tools'

const Grid = styled.div`
  overflow: ${props => props.overflow};
`

const GridMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  ${props => {
    if (props.gutters) {
      return `
        margin-top: ${pxToRem(-Layout.grid.gutter * 2)};
        margin-left: ${pxToRem(-Layout.grid.gutter)};
        margin-right: ${pxToRem(-Layout.grid.gutter)};
      `
    }
  }}
`

export { Grid, GridMain }
