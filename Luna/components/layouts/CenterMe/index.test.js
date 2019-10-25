import React from 'react'
import { shallow } from 'enzyme'
import { CenterMe } from '.'

describe('CenterMe', () => {
    it('renders', () => {
        const wrapper = shallow(<CenterMe />)
        expect(wrapper.exists()).toBe(true)
    })
})
