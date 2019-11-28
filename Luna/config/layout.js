const maxWidth = {
  medium: 768,
  large: 1280,
}

const breakpoints = {
  xxsmall: 375,
  xsmall: 480,
  small: 640,
  medium: 768,
  large: 960,
  xlarge: 1024,
  xxlarge: 1260,
  maxWidthLarge: maxWidth.large,
  xxxlarge: 1800,
}

const grid = {
  unit: 16,
  columnsTotal: 12,
  gutter: 12,
}

const zIndex = {
  negative: -1,
  default: 1,
}

const Layout = {
  breakpoints,
  grid,
  maxWidth,
  zIndex,
}

export { Layout }
