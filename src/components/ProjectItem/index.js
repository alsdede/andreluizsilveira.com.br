import React from 'react'
import Card from '../Card'
import * as S from './styles'

const ProjectItem = () => {
  return(
    <S.ProjectList>

      <S.ProjectItem>
      <S.ProjectCard>
        <S.WrapperImage>
          <S.ProjectItemImage/>

        </S.WrapperImage>

        <S.ProjectItemTitle>Meu site</S.ProjectItemTitle>
        <S.ProjectItemDescription>Este blog foi desenvolvido com Gatsby JS, React JS, Styled Components e Netlify CMS</S.ProjectItemDescription>
      </S.ProjectCard>

      </S.ProjectItem>
    </S.ProjectList>
  )
}

export default ProjectItem
