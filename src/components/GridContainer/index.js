import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const GridContainer = ({ children }) => {
  return (
    <S.GridContainer>
      {children}
    </S.GridContainer>
  )
}

GridContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default GridContainer