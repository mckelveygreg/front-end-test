import React from 'react' 
import styled from 'styled-components' 

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;

  .footerLinks {
    display: flex;
    flex-direction: column;
  }

  .footerCopyright {
    text-align: right;
  }
`

const Footer = () => (
  <StyledFooter>
    <div className="footerLinks" >
      <a href="https://trifoia.com/terms-of-use">Terms of Use</a>
      <a href="https://trifoia.com/privacy-policy">Privacy Policy</a>
      <a href="https://trifoia.com/coi-policy">COI Policy</a>
      <a href={document.URL}>Careers</a>
      <a href="https://trifoia.com/projects">Projects</a>
    </div>
    <p className="footerCopyright">
    © 2018 Trifoia. All rights reserved.
    </p>
  </StyledFooter>
)

export default Footer;