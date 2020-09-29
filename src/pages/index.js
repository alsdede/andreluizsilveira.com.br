import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import AboutMe from "../components/AboutMe"
import BlogList from "../templates/blog-list"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMe/>

  </Layout>
)

export default IndexPage
