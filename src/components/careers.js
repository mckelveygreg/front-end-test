import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Careers = () => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark {
          html
        }
      }
    `}
    render={data => (
      <div
        style={{ padding: '0 2rem' }}
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    )}
  />
)

export default Careers
