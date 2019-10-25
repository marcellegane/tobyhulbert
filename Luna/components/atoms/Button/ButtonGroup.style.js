import styled from 'styled-components'
import { Button } from '../../../config/button'
import { Layout } from '../../../config/layout'

const ButtonGroup = styled.div`
    margin-bottom: ${Layout.margin.default};
    margin-top: ${Layout.margin.default};
    display: flex;
    flex-direction: row;

    button {
        border-radius: 0;
        border-right-width: 0;

        &:first-of-type {
            border-top-left-radius: ${Button.base.borderRadius};
            border-bottom-left-radius: ${Button.base.borderRadius};
        }

        &:last-of-type {
            border-right-width: ${Button.base.borderWidth};
            border-top-right-radius: ${Button.base.borderRadius};
            border-bottom-right-radius: ${Button.base.borderRadius};
        }
    }
`

export { ButtonGroup }