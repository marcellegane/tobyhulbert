import styled from 'styled-components'
import { Luna, pxToRem, LunaMedia } from '../../..'

const Accordion = styled.div``

const AccordionTitle = styled.h3`
  ${Luna.TextStyle.Large}
  color: ${Luna.color.primary.brand};
  font-weight: ${Luna.font.weight.bold};

  + ${Accordion} {
    margin-top: ${pxToRem(Luna.layout.grid.unit, 1.5)};
  }

  ${LunaMedia.below('large')`
    margin-top:${pxToRem(Luna.layout.grid.unit, 2)};
	`}
`

export { Accordion, AccordionTitle }
