import React, { useState, useEffect } from 'react';
import LayoutBasic from "../layouts/LayoutBasic";
import styled from "styled-components";
import { SideBarContainer, MainContainer } from "../styles/StyledComponents";
import { useParams, Link } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { getCatetgories } from "../api/giphy.api";
import Subcategories from '../components/Subcategories';
import { Helmet } from "react-helmet";

export default function Category() {
  const [categories, setCategories] = useState(null);
  const [category, setCategory] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchCategories() {
      const { data: response } = await getCatetgories();
      setCategories(response.data);
      let cat = response.data.find(item => item.name === params.name);
      setCategory(cat);
    }
    fetchCategories();
  }, [params?.name]);

  return (
    <LayoutBasic>
      <Helmet>
        <title>{!category ? "Categoria" : category.name} - Encuentra y comparte en Giphy</title>
      </Helmet>
      <CategoriesContainer>
        <SideBarContainer>
          {!categories ? (
            <LinearProgress />
          ) : (
            <>
              <h1 className="title">Categorias</h1>
              <CategoriesDataContaiener>
                {categories.map((item, index) => (
                  <Link 
                    to={`/categories/${item.name}`} 
                    className={params.name === item.name ? "active" : ""}
                    key={index}
                  >
                    {item.name}
                  </Link>
                ))}
              </CategoriesDataContaiener>
            </>
          )}
        </SideBarContainer>
        <MainContainer>
          {!category ? (
            <LinearProgress />
          ) : (
            <Subcategories data={category} />
          )}
        </MainContainer>
      </CategoriesContainer>
    </LayoutBasic>
  )
}

const CategoriesContainer = styled.div`
  display: flex;
  padding: 20px 0;
`;

const CategoriesDataContaiener = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;


  a {
    padding: 4px 0;
    font-size: 14px;
    text-decoration: none;
    color: #fff;
    transition: color .3s ease-in-out;

    &:hover {
      color: #F74C87;
    }
  }

  .active {
    color: #F74C87;
  }
`; 


