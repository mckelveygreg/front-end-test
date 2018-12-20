import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark {
          html
        }
      }
    `}
    render={data => (
      <>
        <Layout>
          <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}} />
        </Layout>
      </>
    )}
  />
)

export default IndexPage
