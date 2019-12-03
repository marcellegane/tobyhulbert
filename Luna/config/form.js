import { Border } from './border'
import { Color } from './color'
import { Font } from './font'
import { Layout } from './layout'

const Form = {
  base: {
    borderRadius: Border.radius,
    paddingVertical: Layout.grid.unit * 0.75,
    paddingHorizontal: Layout.grid.unit,
    marginVertical: Layout.grid.unit,
    marginHorizontal: 0,
    borderColor: Color.primary.base,
    borderWidth: Border.width,
    borderStyle: Border.style,
    fontSize: 16,
    fontFamily: Font.family.brand,
    color: Color.primary.base,
    backgroundColor: Color.background,
    placeholderColor: Color.primary.base,
  },
  validation: {
    error: {
      backgroundColor: Color.error.foreground,
      borderColor: Color.error.background,
      borderStyle: 'solid',
      borderWidth: Border.width,
      color: Color.error.background,
    },
    fontSize: 12,
  },
  disabled: {
    backgroundColor: Color.disabled.background,
    borderColor: Color.disabled.border,
    color: Color.disabled.color,
  },
  focus: {
    borderColor: Color.secondary.base,
    backgroundColor: Color.background,
  },
}

export { Form }
