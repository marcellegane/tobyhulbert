import React from 'react'
import { mount } from 'enzyme'
import { SuccessMessage } from '.'

describe('SuccessMessage', () => {
  it('Renders the text passed in', () => {
    const wrapper = mount(<SuccessMessage message="This is a success" />)
    expect(wrapper.find('p[data-test="SuccessMessage"]').length).toBe(1)
    expect(wrapper.get(0).props.message).toBe('This is a success')
  })
})
