import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #202121;
  color: #ccc;

  .footerLinks {
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
      color: #ccc;
      font-size: 1rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .footerCopyright {
    font-size: 1rem;
    text-align: right;
    margin-top: auto;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footerLinks">
        <a href="https://trifoia.com/terms-of-use">Terms of Use</a>
        <a href="https://trifoia.com/privacy-policy">Privacy Policy</a>
        <a href="https://trifoia.com/conflict-of-interest">COI Policy</a>
        <Link to="/">Careers</Link>
        <a href="https://trifoia.com/projects">Projects</a>
      </div>
      <p className="footerCopyright">© 2018 Trifoia. All rights reserved.</p>
    </StyledFooter>
  )
}

export default Footer
