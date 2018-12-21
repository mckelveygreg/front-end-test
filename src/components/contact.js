import React from 'react'
import Separator from './separator'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

const ContactContainer = styled.div`
  display: grid;
  float: right;
  align-items: center;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
`
const A = styled.a`
   text-decoration: none;
  color: black;
  margin: 10px;

  & svg {
    font-size: 3rem;
  }
`
// TODO: install fa-icons
const SocMeds = () => (
  <div className="socMeds">
    <A
      href="https://www.facebook.com/trifoia"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faFacebook} />
    </A>
    <A
      href="https://www.linkedin.com/company/trifoia/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </A>
    <A
      href="https://twitter.com/TeamTrifoia"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </A>
  </div>
)

const Contact = () => {
  return (
    <ContactContainer>
      <a href="https://trifoia.com/say-hello">Say Hello</a>
      <Separator />
      <SocMeds />
    </ContactContainer>
  )
}

export default Contact
