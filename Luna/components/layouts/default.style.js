import styled, { createGlobalStyle } from 'styled-components'
import { Luna, pxToEm, pxToRem } from '../..'

const GlobalStyle = createGlobalStyle`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
	}

	html {
		font-size: ${pxToEm(Luna.font.size.base)};
	}

	body {
		font-family: ${Luna.font.family.brand};
		font-size: ${pxToRem(Luna.font.size.base)};
		line-height: 1.5;
		color: ${Luna.color.primary.base};
		background-color: ${Luna.color.background};
	}

	::-moz-selection { background: ${Luna.color.grey.lightest}; }
	::selection { background: ${Luna.color.grey.lightest}; }

	h1,h2,h3,h4,h5,h6 {
		font-weight: ${Luna.font.weight.normal};
	}

	img {
		max-width: 100%;
		height: auto;
	}
`

const Main = styled.main`
  padding-top: 75vh;
`

export { GlobalStyle, Main }
