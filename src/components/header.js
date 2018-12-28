import React from 'react'
import styled from 'styled-components'
import Navbar from './navbar'
import trifoiaLogo from '../images/trifoia-full-color-rgb.png'
import Contact from './contact'
import { Spring } from 'react-spring'

const HeaderStyled = styled.header`
  margin: 0 auto;
  padding-top: 2rem;
  position: sticky;
  top: 0;
  background: white;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: initial;

    & > a {
      margin: 0 auto;
    }
  }
`
const Trifoia = styled.img`
  margin-left: 15%;

  @media (max-width: 800px) {
    margin: 0 auto;
  }
`

const Header = () => (
  <HeaderStyled>
    <a href="https://trifoia.com">
      <Spring
        delay="1500"
        from={{ maxWidth: '375px', marginLeft: '30%' }}
        to={{ maxWidth: '250px', marginLeft: '15%' }}
      >
        {props => <Trifoia style={props} src={trifoiaLogo} alt="Trifoia" />}
      </Spring>
    </a>
    <Contact />
    <Navbar />
  </HeaderStyled>
)

export default Header
