import React from 'react'
import styled from 'styled-components' 

const SeparatorHr = styled.hr`
  width: 3px;
  height: 2.5rem;
  background: linear-gradient(to right, #fff, #00000000, #00000000, #fff),
    linear-gradient(#fff, #00000000, #fff), linear-gradient(#d8ff0d, #d8ff0d);
  border: none;
`

const Separator = () => (
  <SeparatorHr />
)

export default Separator