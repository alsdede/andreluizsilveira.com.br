import React from 'react'
import * as S from './styles'

const Tags = () => {
  return(
    <S.TagsWrapper>
      <S.TagIcon/>
      <S.TagItem>HTML</S.TagItem>
      <S.TagItem>CSS</S.TagItem>
      <S.TagItem>JAVASCRIPT</S.TagItem>
    </S.TagsWrapper>
  )
}

export default Tags