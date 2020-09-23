import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

const Avatar = () => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 48, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <S.Avatar fluid={image.childImageSharp.fluid} />
}

export default Avatar