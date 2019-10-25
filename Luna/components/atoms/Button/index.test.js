import React from 'react'
import { shallow } from 'enzyme'
import { ButtonBrand } from '.'

const setup = (props = {}, conditionalProps = {}) =>
  shallow(<ButtonBrand {...conditionalProps} {...props} />)

describe('ButtonBrand', () => {
  it('renders children when passed in', () => {
    const wrapper = setup({ children: 'Test button' })
    expect(wrapper.contains('Test button')).toBe(true)
  })
})
