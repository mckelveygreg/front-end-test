import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './header'
import Footer from './footer'
import background from '../images/background.svg'

const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: 840px;
  background: #ffffffb0;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header />
        <StyledLayout>
          {children}
          <Footer />
        </StyledLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Thasadith');

  html,
  body {
    font-family: 'Thasadith', sans-serif;
    font-size: 15px;
    margin: 0;
    background-image: url(${background});
    background-size: cover;
    box-sizing: border-box;
  }

  p,
  a,
  label {
    font-size: 1.25rem;
  }
  li,
  input,
  textarea,
  button {
    font-size: 1.1rem;
    font-family: 'Thasadith', sans-serif;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  a:hover {
    text-decoration: underline !important;
  }

  body {
  }
  @media (max-width: 800px) {
    label, textarea, input, button {
      font-size:1rem;
    }
  }
`

export default Layout
