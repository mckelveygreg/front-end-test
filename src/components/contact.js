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
  margin-right: 10%;

  @media (max-width: 800px) {
    margin: 0 auto;
  }
`
const A = styled.a`
  text-decoration: none;
  color: black;
  margin: 10px;

  &:hover {
    text-decoration: underline;
  }

  & svg {
    font-size: 3rem;
    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }
`
const SocMeds = () => (
  <div className="socMeds">
    <A
      href="https://www.facebook.com/trifoia"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faFacebook} color="#3b5998" />
    </A>
    <A
      href="https://www.linkedin.com/company/trifoia/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} color="#0077B5" />
    </A>
    <A
      href="https://twitter.com/TeamTrifoia"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faTwitter} color="#38A1F3" />
    </A>
  </div>
)

const Contact = () => {
  return (
    <ContactContainer>
      <A href="https://trifoia.com/say-hello">Say Hello</A>
      <Separator />
      <SocMeds />
    </ContactContainer>
  )
}

export default Contact
