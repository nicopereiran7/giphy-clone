import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { getCatetgories } from "../api/giphy.api";
import { Link } from "react-router-dom";

export default function DropdownCategories() {
  const [categories, setCategories] = useState(null);
  
  useEffect(() => {
    async function fetchCategories() {
      const { data: response } = await getCatetgories();
      setCategories(response.data.filter((_, index) => index < 10));
    }
    fetchCategories();
  }, [])

  return (
    <DropdownCategoriesContainer>
      <MenuContainer>
        <CategoriesContainer>
          <h2>Categorias</h2>
          
          <div className="categories">
            {categories?.map((category, index) => (
              <Link to={`/categories/${category.name}`} key={index}>{category.name}</Link>
            ))}
          </div>
        </CategoriesContainer>

        <StickersContainer>
          <h2>Stickers</h2>
        </StickersContainer>

        <AppsContainer>
          <h2>App</h2>
        </AppsContainer>

        <AboutContainer>
          <h2>About</h2>
        </AboutContainer>
      </MenuContainer>

      <FooterContainer>
        <div className="left">
          <p>&copy; Giphy Nicolas Pereira</p>
        </div>
        <div className="right">
          <a href="https://support.giphy.com/hc/en-us/articles/360020027752-GIPHY-Terms-of-Service" target="_blank" rel="noreferrer">Terminos de Servicio</a>
          <a href='https://support.giphy.com/hc/en-us/articles/360020286811-GIPHY-Community-Guidelines' target="_blank" rel="noreferrer">Guia de la Comunidad</a>
          <a href="https://support.giphy.com/hc/en-us/articles/360032872931" target="_blank" rel="noreferrer">Politicas de privacidad</a>
          <a href="https://support.giphy.com/hc/en-us/articles/360020287091-GIPHY-DMCA-Copyright-Policy" target="_blank" rel="noreferrer">Copyright</a>
        </div>
      </FooterContainer>
    </DropdownCategoriesContainer>
  )
}

const DropdownCategoriesContainer = styled.div`
`;

const MenuContainer = styled.div`
  display: flex;
  padding: 0 60px;
  padding-top: 40px;
`;

const FooterContainer = styled.div`
  background-color: rgba(0,0,0,0.22);
  display: flex;
  align-items: center;
  padding: 10px 60px 10px 60px;

  .left {
    flex: 0.2;
    
    p {
      font-size: 12px;
    }
  }

  .right {
    flex: 0.8;

    a {
      text-decoration: none;
      color: #fff;
      font-size: 12px;
      font-weight: 400;
      margin-right: 30px;
    }
  }
`;

const CategoriesContainer = styled.div`
  flex: 0.33;

  h2 {
    padding-bottom: 10px;
    border-bottom: 1px solid #fff;
  }

  .categories {
    display: grid;
    gap: 20px;
    grid-gap: 10px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 10px 0 20px 0;

    a {
      text-decoration: none;
      color: #fff;
      transition: color 0.2s ease-in-out;
      
      &:hover {
        color: #F1DEEE;
      }
    }
  }
`;

const StickersContainer = styled.div`
  flex: 0.16;
`;

const AppsContainer = styled.div`
  flex: 0.16;
`;

const AboutContainer = styled.div`
  flex: 0.33;
`;