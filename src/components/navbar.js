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
`
const NavLi = styled.li`
  display: inline-block;
  margin-right: 1rem;
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
      <ListLink to="https://trifori.com/who-we-are">Who We Are</ListLink>
      <Separator />
      <ListLink to="https://trifori.com/what-we-do">What We Do</ListLink>
      <Separator />
      <ListLink to="https://trifori.com/how-we-do-it">How We Do It</ListLink>
      <Separator />
      <ListLink to="https://trifori.com/whats-happening">
        What's Happening
      </ListLink>
    </NavList>
  </div>
)

export default Navbar
