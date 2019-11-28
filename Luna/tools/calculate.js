import { Font } from '../config/font'

function pxToRem(pixelValue, multipler = 1) {
  return `${(pixelValue * multipler) / Font.size.base}rem`
}

function pxToEm(pixelValue, multipler = 1, pixelBase = 16) {
  return `${(pixelValue * multipler) / pixelBase}em`
}

export { pxToRem, pxToEm }
