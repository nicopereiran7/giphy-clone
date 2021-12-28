import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
        <ItemFooter>
          <Link to="#">Privacidad</Link>
        </ItemFooter>
        <ItemFooter>
          <Link to="#">Terminos</Link>
        </ItemFooter>
      </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  position: sticky;
  bottom: 0;
`;

const ItemFooter = styled.div`
  margin-right: 10px;
  color: rgb(166, 166, 166);
  background: rgb(33, 33, 33);
  padding: 6px;
  border-radius: 5px;

  a {
    text-decoration: none;
    color: #fff;
  }
`