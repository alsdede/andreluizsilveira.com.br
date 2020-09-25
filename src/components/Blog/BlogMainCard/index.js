import React from 'react'

import * as S from './styles'

const BlogMainCard = () => {
  return(
    <S.BlogWrapper>
      <S.BackgroundContainer>
      <S.Ribbon>
          <S.Category>CSS</S.Category>
        </S.Ribbon>
      </S.BackgroundContainer>
      <S.ContainerWrapper>
        <S.Title>STYLED COMPONENTS - Como utilizo nos meus projetos</S.Title>
        
        <S.ContainerInfo>
          <S.AuthorWrapper>
            <S.Avatar/>
            <S.Name>André S.</S.Name>
          </S.AuthorWrapper>
          <S.DateWrapper>
            <S.Date>24 set de 2020</S.Date>
            
          </S.DateWrapper>
        </S.ContainerInfo>
      </S.ContainerWrapper>
      
    </S.BlogWrapper>
  )
}

export default BlogMainCard