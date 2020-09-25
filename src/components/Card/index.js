import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Card = ({ children }) => {
  return (
    <S.Card>{children}</S.Card>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card