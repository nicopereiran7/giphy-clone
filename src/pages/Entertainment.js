import React, { useEffect, useState } from 'react';
import LayoutBasic from "../layouts/LayoutBasic";
import { getGifByCategory } from "../api/giphy.api";
import { Helmet } from 'react-helmet';
import GridGifs from '../components/GridGifs';
import { LinearProgress } from "@mui/material";
import styled from "styled-components";
import { SideBarContainer, MainContainer, TitleContainer, Description } from "../styles/StyledComponents";

export default function Entertainment() {
  const [entertainmentGifs, setEntertainmentGifs] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [offset, setOffset] = useState(0);
  const [moreData, setMoreData] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data: response } = await getGifByCategory("entertainment", 0);
      setEntertainmentGifs(response.data);
      setTotalResults(response.pagination.total_count);
    }
    fetchData();
  }, [])

  const fetchResults = async () => {
    setOffset(entertainmentGifs.length);
    let { data: response } = await getGifByCategory("entertainment", offset);

    return response.data;
  }

  const addGif = async () => {
    const newResults = await fetchResults();
    setEntertainmentGifs([...entertainmentGifs, ...newResults]);

    if(entertainmentGifs.length >= totalResults ) {
      setMoreData(false);
    }
  }

  return (
    <LayoutBasic>
      <Helmet>
        <title>Gifs de Entretenimiento - Encuentra y comparte en Giphy</title>
      </Helmet>
      {!entertainmentGifs ? (
        <LinearProgress />
      ) : (
        <EntertainmentContainer>
          <SideBarContainer>
            <EntertaimentImgContainer>
              <img src="https://media.giphy.com/avatars/entertainment/Poc7fb6dD9q5/200h.gif" alt="" />
            </EntertaimentImgContainer>
            <Description>Obten todos los Gif de la cultura pop y de actualidad</Description>
          </SideBarContainer>
          <MainContainer>
            <TitleContainer>
              <h1>GIFs de Entretenimiento</h1>
              <p>@entertaiment</p>
            </TitleContainer>

            <GridGifs 
              data={entertainmentGifs} 
              title="Todos los GIFs de Entretenimiento"
              moreData={moreData}
              addGif={addGif}
              infinite={true}
            />
          </MainContainer>
        </EntertainmentContainer>
      )}
    </LayoutBasic>
  )
}

const EntertainmentContainer = styled.div`
  display: flex;
  padding: 20px 0;
`;

const EntertaimentImgContainer = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

