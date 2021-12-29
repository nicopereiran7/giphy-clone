import React, { useEffect, useState } from 'react';
import LayoutBasic from "../layouts/LayoutBasic";
import { getGifByCategory } from "../api/giphy.api";
import { LinearProgress } from "@mui/material";
import styled from "styled-components";
import { SideBarContainer, MainContainer, TitleContainer, Description } from "../styles/StyledComponents";
import { Helmet } from 'react-helmet';
import GridGifs from '../components/GridGifs';

export default function Sport() {
  const [sportGifs, setSportGifs] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [offset, setOffset] = useState(0);
  const [moreData, setMoreData] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      const { data: response } = await getGifByCategory("sport", 0);
      setSportGifs(response.data);
      setTotalResults(response.pagination.total_count);
    }
    fetchData();
  }, [])

  const fetchResults = async () => {
    setOffset(sportGifs.length);
    let { data: response } = await getGifByCategory("sport", offset);

    return response.data;
  }

  const addGif = async () => {
    const newResults = await fetchResults();
    setSportGifs([...sportGifs, ...newResults]);

    if(sportGifs.length >= totalResults ) {
      setMoreData(false);
    }
  }

  return (
    <LayoutBasic>
      <Helmet>
        <title>Gifs de Deportes - Encuentre y coparte en Giphy</title>
      </Helmet>
      {!sportGifs ? (
        <LinearProgress />
      ) : (
        <SportContainer>
          <SideBarContainer>
            <CategoryImgContainer>
              <img src="https://media.giphy.com/channel_assets/sports/P658KMA9mwy4/200h.gif" alt="" />
            </CategoryImgContainer>
            <Description>Your go-to for any and all sports GIFs! LeBron, Ronaldo, Gronk, Serena...We’ve got them all!</Description>
          </SideBarContainer>
          <MainContainer>
            <TitleContainer>
              <h1>Sports GIFs</h1>
              <p>@sports</p>
            </TitleContainer>

            <GridGifs 
              data={sportGifs} 
              title="Todos los GIFs de deportes"
              moreData={moreData}
              addGif={addGif}
              infinite={true}
            />
          </MainContainer>
        </SportContainer>
      )}
    </LayoutBasic>
  )
}

const SportContainer = styled.div`
  display: flex;
  padding: 20px 0;
`;

const CategoryImgContainer = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;