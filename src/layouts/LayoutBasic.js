import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

export default function LayoutBasic({ children }) {
  return (
    <AppContainer>
      <NavBar />
      <SearchBar />
      {children}
    </AppContainer>
  );
}
const AppContainer = styled.div`
  margin: 0 auto;
  padding: 0 400px;
  min-height: 100vh;

  @media (max-width: 1700px) {
    padding: 0 240px;
  }

  @media (max-width: 1390) {
    padding: 0 100px;
  }
`;
