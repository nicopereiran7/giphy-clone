import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function Subcategories({ data }) {
  const [subcategories, setSubcategories] = useState(data.subcategories);
  const history = useHistory();

  useEffect(() => {
    setSubcategories(data.subcategories);
  }, [data])

  return (
    <SubcategoriesContainer>
      <h1>{data.name}</h1>

      <GridContainer>
        {subcategories.map((item, index) => (
          <GridItem key={index} onClick={() => history.push(`/search/${item.name}`)}>
            <h4>{item.name}</h4>
          </GridItem>
        ))}
      </GridContainer>
    </SubcategoriesContainer>
  )
}

const SubcategoriesContainer = styled.div`

`;

const GridContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #14B2C3;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #3DC6D4;
    cursor: pointer;
  }

  h4 {
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
  }
`;