import React, { useEffect } from "react";
import SlideBasic from "../components/SlideBasic";
import styled from "styled-components";
import { AiOutlineRise, AiFillThunderbolt, AiFillSound } from "react-icons/ai";
import SliderArtistGif from "../components/SliderArtistGif";
import LayoutBasic from "../layouts/LayoutBasic";
import Promo from "../components/Promo";
import Clips from "../components/Clips";
import { Helmet } from "react-helmet";

// REDUX
import { fetchTrendingGifs } from "../store/slices/gifs/trendingGifsSlice";
import { fetchArtistGifs } from "../store/slices/gifs/artistGifsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { list: trending } = useSelector(state => state.trendingGifs);
  const { artistGifs } = useSelector(state => state.artistGifs);

  // Trending Gifs
  useEffect(() => {
    dispatch(fetchTrendingGifs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchArtistGifs())
  }, [dispatch]);


  return (
    <LayoutBasic>
      <Helmet>
        <title>GIPHY - Se Creativo</title>
      </Helmet>
      <HomeContainer>
        <Promo />
        <Container data-aos="fade-up">
          <Title>
            <AiOutlineRise style={{ fontSize: "2rem", color: "blue" }} />
            <h2>Trending</h2>
          </Title>
          <SlideBasic data={trending} />
        </Container>
        <Container>
          <Title>
            <AiFillThunderbolt style={{ fontSize: "2rem", color: "pink" }} />
            <h2>Artists</h2>
          </Title>
          <SliderArtistGif data={artistGifs} />
        </Container>
        <Container>
          <Title>
            <AiFillSound style={{ fontSize: "2rem", color: "#48DDA6" }} />
            <h2>Clips</h2>
          </Title>
          <Clips />
        </Container>
      </HomeContainer>
    </LayoutBasic>
  );
}

const HomeContainer = styled.div``;

const Container = styled.div`
  margin-top: 50px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;

  h2 {
    margin-left: 8px;
  }
`;
