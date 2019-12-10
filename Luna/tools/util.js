import { Form } from '../config/form'

class Util {
  static calculateBorderColor(disabled, valid) {
    if (disabled && valid) {
      return Form.disabled.borderColor
    }

    if (!valid && !disabled) {
      return Form.validation.error.borderColor
    }

    if (valid && !disabled) {
      return Form.base.borderColor
    }

    if (!valid && disabled) {
      return Form.validation.error.borderColor
    }
  }

  static calculateBackgroundColor(disabled, valid) {
    if (disabled && valid) {
      return Form.disabled.backgroundColor
    }

    if (!valid && !disabled) {
      return Form.validation.error.backgroundColor
    }

    if (valid && !disabled) {
      return Form.base.backgroundColor
    }

    if (!valid && disabled) {
      return Form.validation.error.backgroundColor
    }
  }

  static calculateColor(disabled, valid) {
    if (disabled && valid) {
      return Form.disabled.color
    }

    if (!valid && !disabled) {
      return Form.validation.error.color
    }

    if (valid && !disabled) {
      return Form.base.color
    }

    if (!valid && disabled) {
      return Form.validation.error.color
    }
  }

  static calculateBackgroundImageArrowhead(disabled, valid) {
    return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath fill='%23${this.calculateColor(
      disabled,
      valid
    ).substr(
      1
    )}' fill-rule='evenodd' d='M10.59.59L6 5.17 1.41.59 0 2l6 6 6-6z'/%3E%3C/svg%3E")`
  }

  static getBackgroundImageCross() {
    return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23000000' d='M19.333 2.547l-1.88-1.88L10 8.12 2.547.667l-1.88 1.88L8.12 10 .667 17.453l1.88 1.88L10 11.88l7.453 7.453 1.88-1.88L11.88 10z'/%3E%3Cpath d='M-6-6h32v32H-6z'/%3E%3C/g%3E%3C/svg%3E")`
  }

  static getBackgroundImageTick() {
    return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='14'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M-3-5h24v24H-3z'/%3E%3Cpath fill='%23000000' d='M6 11.17L1.83 7 .41 8.41 6 14 18 2 16.59.59z'/%3E%3C/g%3E%3C/svg%3E")`
  }

  static getBackgroundMapPinImage() {
    return `url("data:image/svg+xml,%3Csvg width='14' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z' fill='%23000000'/%3E%3Cpath d='M-5-2h24v24H-5z'/%3E%3C/g%3E%3C/svg%3E");`
  }
}

export default Util
