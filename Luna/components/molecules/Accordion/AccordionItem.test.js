import React from 'react'
import { mount } from 'enzyme'
import { AccordionItem } from './AccordionItem'

describe('AccordionItem', () => {
  it('renders', () => {
    const wrapper = mount(
      <AccordionItem label="Label">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        distinctio accusamus mollitia. Nisi earum nostrum cumque ratione magnam
        autem veniam, iusto, mollitia ad a veritatis fugiat obcaecati minus,
        ipsum itaque!
      </AccordionItem>
    )
    expect(wrapper.find('div[data-test="accordion-item"]').length).toBe(1)
  })

  it('does not render if data is empty', () => {
    const wrapper = mount(<AccordionItem label="Label"></AccordionItem>)
    expect(wrapper.find('div[data-test="accordion-item"]').length).toBe(0)
  })

  it('correctly sets the isOpen state based on the isOpen prop', () => {
    const wrapper = mount(
      <AccordionItem isOpen label="Label">
        Content
      </AccordionItem>
    )
    expect(wrapper.state().isOpen).toBe(true)
  })
})
