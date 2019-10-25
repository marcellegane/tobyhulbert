import React from 'react'
import { shallow } from 'enzyme'
import { LightWeight } from '.'

describe('LightWeight', () => {
    it('renders', () => {
        const wrapper = shallow(<LightWeight />)
        expect(wrapper.exists()).toBe(true)
    })
})
