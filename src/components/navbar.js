import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
`
const NavList = styled.ul`
  list-style: none;
  margin: auto;
`
const ListLink = props => (
  <NavItem>
    <Link
      to={props.to}
      activeStyle={{ background: '#2b2b2b', color: 'white' }}
      style={{ color: '#2b2b2b', textDecoration: 'none' }}
    >
      {props.children}
    </Link>
  </NavItem>
)

const Navbar = () => (
  <div>
    <NavList>
      <ListLink to="/">Home</ListLink>
    </NavList>
  </div>
)

export default Navbar
