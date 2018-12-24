import React from 'react'
import styled from 'styled-components' 

const SeparatorHr = styled.hr`
  width: 3px;
  height: 2.5rem;
  background: linear-gradient(to right, #fff, #00000000, #00000000, #fff),
    linear-gradient(#fff, #00000000, #fff), linear-gradient(#7497E1, #7497E1);
  border: none;

  @media (max-width: 800px) {
    width: 80%;
    height: 1px;
  }
`

const Separator = () => (
  <SeparatorHr />
)

export default Separator