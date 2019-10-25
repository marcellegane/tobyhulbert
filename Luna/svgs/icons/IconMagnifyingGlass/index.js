import React from 'react'
import PropTypes from 'prop-types'

const IconMagnifyingGlass = (props) => {
    const { fillColor } = props

    return (
	<svg width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
		<g id="Symbols" stroke="none" strokeWidth="1" fill={`${fillColor}`} fillRule="evenodd">
			<g id="button/search/default" transform="translate(-100.000000, -15.000000)">
				<g id="Group" transform="translate(97.000000, 12.000000)">
					<g id="icon/search">
						<g id="ic_search">
							<g id="Icon-24px">
								<path d="M15.5,14 L14.71,14 L14.43,13.73 C15.41,12.59 16,11.11 16,9.5 C16,5.91 13.09,3 9.5,3 C5.91,3 3,5.91 3,9.5 C3,13.09 5.91,16 9.5,16 C11.11,16 12.59,15.41 13.73,14.43 L14,14.71 L14,15.5 L19,20.49 L20.49,19 L15.5,14 L15.5,14 Z M9.5,14 C7.01,14 5,11.99 5,9.5 C5,7.01 7.01,5 9.5,5 C11.99,5 14,7.01 14,9.5 C14,11.99 11.99,14 9.5,14 L9.5,14 Z" id="Shape" fill="#003149" />
								<polygon id="Shape" points="0 0 24 0 24 24 0 24" />
							</g>
						</g>
					</g>
				</g>
			</g>
		</g>
	</svg>
    )
}

IconMagnifyingGlass.propTypes = {
    fillColor: PropTypes.string,
}

IconMagnifyingGlass.defaultProps = {
    fillColor: 'none',
}

export { IconMagnifyingGlass }






