import React from 'react'
import * as S from './styles'

const BlogContentList = () => {
  return(
    <S.BlogListWrapper>
      <S.BlogPostItem>
        <S.BlogThumb/>
        <S.BlogTitle>React Native Lorem</S.BlogTitle>
        <S.BlogDescription>React Native Lorem</S.BlogDescription>
      </S.BlogPostItem>
    </S.BlogListWrapper>
  )
}

export default BlogContentList