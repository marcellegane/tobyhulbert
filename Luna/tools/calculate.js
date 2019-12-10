import { Font } from '../config/font'
import { Layout } from '../config/layout'

function pxToRem(pixelValue, multipler = 1) {
  const pixelInt = pixelValue === 'default' ? Layout.grid.unit : pixelValue

  return `${(pixelInt * multipler) / Font.size.base}rem`
}

function pxToEm(pixelValue, multipler = 1, pixelBase = 16) {
  const pixelInt = pixelValue === 'default' ? Layout.grid.unit : pixelValue

  return `${(pixelInt * multipler) / pixelBase}em`
}

export { pxToRem, pxToEm }
