import React from 'react'
import PropTypes from 'prop-types'
import { TwoColumnLargeRightContainer, ColumnLeft, ColumnRight } from './index.style'

const ThisTwoColumnLargeRight = ({ columnLeft, columnRight }) => {
  return (
	<TwoColumnLargeRightContainer>
		<ColumnLeft>
			{columnLeft}
		</ColumnLeft>
		<ColumnRight>
			{columnRight}
		</ColumnRight>
	</TwoColumnLargeRightContainer>
  )
}

ThisTwoColumnLargeRight.propTypes = {
    columnLeft: PropTypes.node.isRequired,
    columnRight: PropTypes.node.isRequired,
}

export { ThisTwoColumnLargeRight as TwoColumnLargeRight }
