import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Navbar from './navbar'
import trifoiaLogo from '../images/trifoia-full-color-rgb.png'

const HeaderStyled = styled.header`
  margin: 1.45rem;
  max-width: 960;
  padding: 1.5rem 1rem;
  text-align: center;
`
const Trifoia = styled.img`
  max-width: 250px;
`

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <Link
      to="https://trifoia.com"
      style={{
        color: 'blue',
        textDecoration: 'none',
      }}
    >
      <Trifoia src={trifoiaLogo} alt="Trifoia" />
    </Link>
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
