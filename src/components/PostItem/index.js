import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Card from '../Card'
import Tags from '../Tags'
import * as S from './styles'

const PostItem= ({slug,date,timeToRead,title,description,tags}) => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "desert.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 150, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <S.PostItemLink to={slug}>
      <Card>
        <S.PostItemThumb fluid={image.childImageSharp.fluid}/>
        <S.PostItemInfo>
          <S.PostItemDate>{date}, {timeToRead} min leitura</S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
          <Tags tags={tags}/>
        </S.PostItemInfo>
      </Card>
    </S.PostItemLink>
  );
};

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  timeToRead: PropTypes.number,
  tags: PropTypes.array,
  description: PropTypes.string,

}

export default PostItem;
