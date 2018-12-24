import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components' 

const StyledCareers = styled.div`
  padding: 0 2rem;

  @media (max-width: 800px) {
    padding: 0;
  }
`

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
      <StyledCareers
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    )}
  />
)

export default Careers
