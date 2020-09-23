import React from 'react'
import Avatar from '../Avatar'
import Container from '../Container'
import Menu from '../Menu'
import * as S from './styles'

const Header = () => {
  return(
    <S.HeaderWrapper>
        <Container>
      <S.HeaderMain>
          <S.BrandContainer>
            <Avatar/>
            <S.BrandTitle>André L. Silveira</S.BrandTitle>
          </S.BrandContainer>
          <Menu/>
      </S.HeaderMain>
        </Container>
    </S.HeaderWrapper>
  )
}

export default Header