import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Navbar from './navbar'
import trifoiaLogo from '../images/trifoia-full-color-rgb.png'
import Contact from './contact';

const HeaderStyled = styled.header`
  margin: 1.45rem auto;
  max-width: 960px;
  padding: 1.5rem 1rem;
`
const Trifoia = styled.img`
  max-width: 250px;
`

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <a href="https://trifoia.com">
      <Trifoia src={trifoiaLogo} alt="Trifoia" />
    </a>
    <Contact />
    <Navbar />
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
