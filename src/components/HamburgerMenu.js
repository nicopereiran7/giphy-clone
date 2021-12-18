import React from "react";
import styled from "styled-components";

export default function HamburgerMenu({ hamburgerIsOpen }) {
  return (
    <Ul hamburgerIsOpen={hamburgerIsOpen}>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
    </Ul>
  )
}

const Ul = styled.ul`
  z-index: 2;
  background-color: #121212;
  list-style: none;
  flex-flow: column nowrap;
  position: fixed;
  transform: ${({ hamburgerIsOpen }) => hamburgerIsOpen ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
`