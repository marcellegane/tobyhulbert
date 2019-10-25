import React from 'react'
import PropTypes from 'prop-types'

const IconPinpoint = (props) => {
    const { fillColor } = props

    return (
	<svg width="14px" height="20px" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg">
		<g id="Symbols" stroke="none" strokeWidth="1" ill={`${fillColor}`} fillRule="evenodd">
			<g id="form/input/location/keyline" transform="translate(-282.000000, -14.000000)">
				<g id="icon/location" transform="translate(277.000000, 12.000000)">
					<g id="ic_place">
						<g id="Icon-24px">
							<path d="M12,2 C8.13,2 5,5.13 5,9 C5,14.25 12,22 12,22 C12,22 19,14.25 19,9 C19,5.13 15.87,2 12,2 L12,2 Z M12,11.5 C10.62,11.5 9.5,10.38 9.5,9 C9.5,7.62 10.62,6.5 12,6.5 C13.38,6.5 14.5,7.62 14.5,9 C14.5,10.38 13.38,11.5 12,11.5 L12,11.5 Z" id="Shape" fill="#EF576F" />
							<polygon id="Shape" points="0 0 24 0 24 24 0 24" />
						</g>
					</g>
				</g>
			</g>
		</g>
	</svg>
    )
}

IconPinpoint.propTypes = {
    fillColor: PropTypes.string,
}

IconPinpoint.defaultProps = {
    fillColor: 'none',
}

export { IconPinpoint }






