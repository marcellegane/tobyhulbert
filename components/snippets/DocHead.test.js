import React from 'react'
import { shallow } from 'enzyme'
import DocHead from './DocHead.js'
import Config from '../../src/config'

jest.mock('../../src/config')

const setupConfigMock = () => {
  Config.siteUrl.mockImplementation(() => 'https://www.carcraft.co.uk/')
}

describe('DocHead:', () => {
  beforeEach(() => {
    setupConfigMock()
  })

  it('renders', () => {
    const wrapper = shallow(<DocHead urlPath="/" />)
    expect(wrapper.length).toBe(1)
  })

  it('renders when urlPath is null', () => {
    const wrapper = shallow(<DocHead urlPath={null} />)
    expect(wrapper.length).toBe(1)
  })
})
