import React from 'react'
import Separator from './separator';
import styled from 'styled-components' 

const ContactContainer = styled.div`
  display: grid;
  float: right;
  align-items: center;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
`
// TODO: install fa-icons
const SocMeds = () => (
  <div>
    Facebook
    LinkedIn
    Twitter
  </div>
)

const Contact = () => {
  return (
    <ContactContainer>
      <a href="https://trifoia.com/say-hello" >Say Hello</a>
      <Separator />
      <SocMeds />
    </ContactContainer>
  )
}

export default Contact
