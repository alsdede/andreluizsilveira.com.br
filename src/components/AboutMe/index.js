import React from 'react'
import GridContainer from '../GridContainer'


import  * as S from './styles'
import {skills} from './content'

const AboutMe = () => {
  return(
    <GridContainer>

    <S.AboutWrapper>
      <S.AboutInfo>
        <S.Title><strong>Olá!</strong> Meu nome é André Silveira,  </S.Title>
        <S.SubTitle>sou desenvolvedor Front-end</S.SubTitle>
        <S.Description>Sou apaixonado por tecnologia e desenvolvimento web.
          Fiz este blog para compartilhar um pouco da minha experiência,
           tecnologias que eu acho interessante e relevante para carreira.</S.Description>
           <S.Description>Esse site foi desenvolvido utilizando <strong>Gatsby JS</strong>, <strong>React JS</strong>, <strong>Styled-components</strong> e <strong>Netlify</strong>,</S.Description>
          <S.SocialContainer>
            <S.SocialTitle>Contato:</S.SocialTitle>
            <S.SocialItemWrapper>
              <S.SocialItem href="https://www.linkedin.com/in/alsdede/" target="_blank"><S.SocialLinkedin/></S.SocialItem>
              <S.SocialItem href="https://www.github.com/alsdede/" target="_blank"><S.SocialGithub/></S.SocialItem>
              <S.SocialItem>E-mail:als.andresilveira@gmail.com</S.SocialItem>
            </S.SocialItemWrapper>
          </S.SocialContainer>
      </S.AboutInfo>
      <S.SkillsContainer>
        <S.SkillsBoard>
          <S.SkillWrapper>
            <S.SkillTitle>Skills</S.SkillTitle>
            <S.SkillRow>
            {skills.map((skill,i)=>(
                <S.SkillItemWrapper  key={i}>
                <S.SkillItem href={skill.link} target="_blank">{skill.label}</S.SkillItem>
              </S.SkillItemWrapper>
              )
              )}
            </S.SkillRow>
          </S.SkillWrapper>
        </S.SkillsBoard>
          <S.SkillImageWrapper>
            <S.SkillImage/>
          </S.SkillImageWrapper>

      </S.SkillsContainer>
    </S.AboutWrapper>
    </GridContainer>
  )
}

export default AboutMe
