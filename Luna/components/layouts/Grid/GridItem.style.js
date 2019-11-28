import styled from 'styled-components'
import { Layout } from '../../../config/layout'
import { pxToRem, pxToEm } from '../../../tools'

const { breakpoints, grid } = Layout
const { columnsTotal } = grid
const defaultGutter = grid.gutter

const getGridItemWidth = (includeGutters, columnSpan) =>
  `width: ${
    includeGutters
      ? `calc(${(columnSpan / columnsTotal) * 100}% - ${pxToRem(
          defaultGutter * 2
        )})`
      : `${(columnSpan / columnsTotal) * 100}%`
  };`

const getGridMargin = includeGutters =>
  `margin: ${
    includeGutters
      ? `${pxToRem(defaultGutter * 2)} ${pxToRem(defaultGutter)} 0`
      : `0`
  };`

const getGridItemOffset = (includeGutters, columnSpan) =>
  `margin-left: ${
    includeGutters
      ? `calc(${(columnSpan / columnsTotal) * 100}% + ${pxToRem(
          defaultGutter
        )})`
      : `${(columnSpan / columnsTotal) * 100}%`
  };`

const GridItem = styled.div`
  ${props => {
    const { gutters } = props

    const defaultStyles = `
      ${getGridItemWidth(gutters, columnsTotal)}
      ${getGridMargin(gutters)}
    `

    const columnSpanStyles = Object.keys(breakpoints).reduce(
      (string, breakpoint) => {
        if (props[breakpoint]) {
          return `${string}
            @media only screen and (min-width: ${pxToEm(
              breakpoints[breakpoint] + 1
            )}) {
              ${getGridItemWidth(gutters, props[breakpoint])}
              ${getGridMargin(gutters)}
            }
          `
        }
        return string
      },
      ``
    )

    const offsetStyles = Object.keys(breakpoints).reduce(
      (string, breakpoint) => {
        if (props[`offset-${breakpoint}`]) {
          return `${string}
            @media only screen and (min-width: ${pxToEm(
              breakpoints[breakpoint] + 1
            )}) {
              ${getGridItemOffset(gutters, props[`offset-${breakpoint}`])}
            }
          `
        }
        return string
      },
      ``
    )

    const orderStyles = Object.keys(breakpoints).reduce(
      (string, breakpoint) => {
        if (props[`order-${breakpoint}`]) {
          return `${string}
        @media only screen and (min-width: ${pxToEm(
          breakpoints[breakpoint] + 1
        )}) {
          order: ${props[`order-${breakpoint}`]};
        }
      `
        }
        return string
      },
      ``
    )

    return `
      ${defaultStyles}
      ${columnSpanStyles}
      ${offsetStyles}
      ${orderStyles}
    `
  }}
`

export { GridItem }
