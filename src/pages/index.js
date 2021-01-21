import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { theme } from '../styles/Theme';
import ShowCaseProject from "../components/ShowCaseProject/ShowCaseProject"
import ShowCaseBlog from "../components/ShowCaseBlog/ShowCaseBlog"
import Intro from '../components/Intro/Intro';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro theme={theme} />
    <ShowCaseProject theme={theme} />
    <ShowCaseBlog theme={theme} />
  </Layout>
)

export default IndexPage
