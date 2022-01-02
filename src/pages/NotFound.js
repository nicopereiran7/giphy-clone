import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <PageContainer>
      <Helmet>
        <title>Pagina No Encontrada - Encuentra y Comparte en Giphy</title>
      </Helmet>
      <NotFoundContainer>
        <h1>Page Not Found</h1>
        <Link to="/">Ir al Inicio</Link>
      </NotFoundContainer>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  min-height: 84vh;
  display: grid;
  place-items: center;
`;

const NotFoundContainer = styled.div`
  a {
    text-decoration: none;
    color: #fff;
    text-align: center;
  }
`;