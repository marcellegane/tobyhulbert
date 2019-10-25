import React from 'react'
import { mount } from 'enzyme'
import { ValidationMessage } from '.'

describe('ValidationMessage', () => {
  it('Renders the text passed in', () => {
    const wrapper = mount(<ValidationMessage message="This is an error" />)
    expect(wrapper.find('p[data-test="ValidationMessage"]').length).toBe(1)
    expect(wrapper.get(0).props.message).toBe("This is an error")
  })
})