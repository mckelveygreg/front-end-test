import React from 'react'
import styled from 'styled-components'
import Separator from './separator'

const NavList = styled.ul`
  list-style: none;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 600px;
  padding: 0;
  padding-bottom: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const NavLi = styled.li`
  display: inline-block;
  margin-right: 1rem;
  padding: .3rem;

  &:hover {
    background: #FFAA33aa;
    border-radius: 3px;
  }
`
const Link = styled.a`
  color: #2b2b2b;
  text-decoration: none;
`
const ListLink = props => (
  <NavLi>
    <Link href={props.to}>{props.children}</Link>
  </NavLi>
)

const Navbar = () => (
  <div>
    <NavList>
      <ListLink to="https://trifoia.com/who-we-are">Who We Are</ListLink>
      <Separator />
      <ListLink to="https://trifoia.com/what-we-do">What We Do</ListLink>
      <Separator />
      <ListLink to="https://trifoia.com/how-we-do-it">How We Do It</ListLink>
      <Separator />
      <ListLink to="https://trifoia.com/whats-happening">
        What's Happening
      </ListLink>
    </NavList>
  </div>
)

export default Navbar
