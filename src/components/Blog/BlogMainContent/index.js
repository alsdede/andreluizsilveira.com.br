import React from 'react'
import BlogMainCard from '../BlogMainCard'
import BlogColumnCard from '../BlogColumnContent'

import * as S from './styles'

const BlogMainContent = () => {
  return(
    <S.BlogWrapper>
      <BlogMainCard/>
      <BlogColumnCard/>
    </S.BlogWrapper>
  )
}

export default BlogMainContent