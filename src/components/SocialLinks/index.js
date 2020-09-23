import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './styles'

const SocialLinks = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              youtubeLink
              twitterLink
              linkedinLink
              githubLink
            }
          }
        }
      }
    `
  )
  return(
    <S.SocialWrapper>      
      <S.SocialItem
        href={site.siteMetadata.social.twitterLink}
        title="Twitter"
        >
        <S.SocialTwitter />
      </S.SocialItem>
      <S.SocialItem
        href={site.siteMetadata.social.githubLink}
        title="Github"
        >
        <S.SocialGithub />
      </S.SocialItem>
      <S.SocialItem
        href={site.siteMetadata.social.linkedinLink}
        title="LinkedIn"
        >
        <S.SocialLinkedin />
      </S.SocialItem>
    </S.SocialWrapper>
  )
}

export default SocialLinks