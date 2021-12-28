import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

export default function LayoutBasic({ children }) {
  return (
    <AppContainer>
      <MainContainer>
        <NavBar />
        <SearchBar />
        {children}
      </MainContainer>
      <Footer />
    </AppContainer>
  );
}
const AppContainer = styled.div`
`;

const MainContainer = styled.div`
  margin: 0 auto;
  padding: 0 400px;
  min-height: 90vh;

  @media (max-width: 1700px) {
    padding: 0 240px;
  }

  @media (max-width: 1400px) {
    padding: 0 100px;
  }

  @media (max-width: 1000px) {
    padding: 0 20px;
  }
`;
