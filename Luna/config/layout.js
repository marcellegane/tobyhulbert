const breakpoints = {
  xxsmall: 375,
  xsmall: 480,
  small: 640,
  medium: 768,
  large: 960,
  xlarge: 1024,
  xxlarge: 1260,
  xxxlarge: 1800,
}

const grid = {
  unit: '16px',
}

const padding = {
  default: grid.unit,
}

const margin = {
  default: grid.unit,
}

const maxWidth = '1440px'

const header = {
  height: '48px',
}

const Layout = {
  breakpoints,
  grid,
  header,
  padding,
  margin,
  maxWidth,
}

export { Layout }
