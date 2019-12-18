import { css } from 'styled-components'
import { Layout } from '../config/layout'
import { pxToEm } from './calculate'

/* Example usage:
 ${LunaMedia.above('medium')`
    background-color: black;
  `}
*/

const getSizeFromBreakpoint = (breakpointValue, breakpoints = {}) => {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue]
  }
  if (parseInt(breakpointValue, 10)) {
    return breakpointValue
  }
  console.error('No valid breakpoint or size specified for media.')
  return '0'
}

/**
 * Media query generator
 * @param {Object} breakpoints - Map labels to breakpoint Layout.breakpoint
 * @return {Object} - Media generators for each breakpoint
 */
const generateMedia = breakpoints => {
  const below = breakpoint => (...args) => css`
    @media (max-width: ${pxToEm(
        getSizeFromBreakpoint(breakpoint, breakpoints) - 1
      )}) {
      ${css(...args)}
    }
  `

  const above = breakpoint => (...args) => css`
    @media (min-width: ${pxToEm(
        getSizeFromBreakpoint(breakpoint, breakpoints)
      )}) {
      ${css(...args)}
    }
  `

  const between = (firstBreakpoint, secondBreakpoint) => (...args) => css`
    @media (min-width: ${pxToEm(
        getSizeFromBreakpoint(firstBreakpoint, breakpoints)
      )}) and (max-width: ${pxToEm(
        getSizeFromBreakpoint(secondBreakpoint, breakpoints) - 1
      )}) {
      ${css(...args)}
    }
  `

  return Object.assign({
    below,
    above,
    between,
  })
}

/**
 * Media object with default breakpoints
 * @return {object} - Media generators for each size
 */

const LunaMedia = generateMedia(Layout.breakpoints)

export { LunaMedia }
