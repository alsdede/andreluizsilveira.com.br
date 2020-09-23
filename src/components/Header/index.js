import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Avatar from '../Avatar'
import Container from '../Container'
import Menu from '../Menu'
import * as S from './styles'

const Header = () => {
  return(
    <S.HeaderWrapper>
        <Container>
      <S.HeaderMain>
        <AniLink
        cover
        bg={"var(--background)"}
        direction="down"
        duration={1}
        to="/"
        title="Voltar para home"
        >
          <S.BrandContainer>
            <Avatar/>
            <S.BrandTitle>André L. Silveira</S.BrandTitle>
          </S.BrandContainer>
        </AniLink>
          <Menu/>
      </S.HeaderMain>
        </Container>
    </S.HeaderWrapper>
  )
}

export default Header