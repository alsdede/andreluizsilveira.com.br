import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import GridContainer from "../components/GridContainer"
import BlogMainContent from '../components/Blog/BlogMainContent'
import BlogColumnContent from '../components/Blog/BlogColumnContent'

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <GridContainer>
       <BlogMainContent/>
        
      {/**postList.map(
        ({
          node: {
            frontmatter: { ribbon, tags, date, description, title },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
            slug={slug}  
            tags={tags}
            ribbon={ribbon}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
        )*/}
        </GridContainer>
    </Layout>
  )
}


export default BlogList

export const PostListQuery = graphql`
  query PostListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            ribbon
            tags
            title
          }
          timeToRead
        }
      }
    }
  }
  `