import React from 'react'

import * as S from './styles'

const BlogColumnContent = () => {
  return(
    <S.ColumnWrapper>
      <S.PostItem>
        <S.BackgroundImage/>
        <S.PostInfo>
          <S.PostDate>
            <S.Category>REACT</S.Category>
            <S.Date>23 de set de 2020</S.Date>
          </S.PostDate>
          <S.PostTitle>Javascript Lorem Ips</S.PostTitle>
          <S.AuthorWrapper>
            <S.Avatar/>
            <S.Name>André S.</S.Name>
          </S.AuthorWrapper>
        </S.PostInfo>
      </S.PostItem>
      <S.Separator/>

      <S.PostItem>
        <S.BackgroundImage/>
        <S.PostInfo>
          <S.PostDate>
            <S.CategoryWrapper>
              <S.Category>REACT</S.Category>
            </S.CategoryWrapper>
            <S.Date>23 de set de 2020</S.Date>
          </S.PostDate>
          <S.PostTitle>Javascript Lorem Ips</S.PostTitle>
          <S.AuthorWrapper>
            <S.Avatar/>
            <S.Name>André S.</S.Name>
          </S.AuthorWrapper>
        </S.PostInfo>
      </S.PostItem>
      <S.Separator/>
      <S.PostItem>
        <S.BackgroundImage/>
        <S.PostInfo>
          <S.PostDate>
            <S.CategoryWrapper>
              <S.Category>REACT</S.Category>
            </S.CategoryWrapper>
            <S.Date>23 de set de 2020</S.Date>
          </S.PostDate>
          <S.PostTitle>React Lorem Ips</S.PostTitle>
          <S.AuthorWrapper>
            <S.Avatar/>
            <S.Name>André S.</S.Name>
          </S.AuthorWrapper>
        </S.PostInfo>
      </S.PostItem>
      <S.Separator/>

      
    </S.ColumnWrapper>
  )
}

export default BlogColumnContent