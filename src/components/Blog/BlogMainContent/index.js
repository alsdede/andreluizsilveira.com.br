import React from 'react'
import BlogMainCard from '../BlogMainCard'
import BlogColumnCard from '../BlogColumnContent'

import * as S from './styles'

const BlogMainContent = () => {
  return(
    <S.BlogWrapper>
        <S.AlertBackground><S.AlertMes>EM CONSTRUÇÃO!</S.AlertMes></S.AlertBackground>
        <BlogMainCard/>
        <BlogColumnCard/>

    </S.BlogWrapper>
  )
}

export default BlogMainContent
