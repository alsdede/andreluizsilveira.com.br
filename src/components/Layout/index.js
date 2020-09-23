import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { TransitionPortal } from 'gatsby-plugin-transition-link'
import Header from '../Header'
import Footer from '../Footer'
import GlobalStyles from '../../styles/global'
import * as S from './styles'

const Layout = ({children}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            position
            description
            
          }
        }
      }
    `
  )

  return(
    <S.LayoutWrapper>
      <GlobalStyles/>
      <TransitionPortal level="top">
        <Header site={site.siteMetadata}/>
      </TransitionPortal>
      <S.LayoutMain>
        {children}
      </S.LayoutMain>
      <TransitionPortal level="top">
        <Footer/>
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout