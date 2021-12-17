import React, { useEffect, useState } from "react";
import SlideBasic from "../components/SlideBasic";
import axios from "../api/axios";
import styled from "styled-components";
import { AiOutlineRise, AiFillThunderbolt, AiFillSound } from "react-icons/ai";
import SliderArtistGif from "../components/SliderArtistGif";
import LayoutBasic from "../layouts/LayoutBasic";
import Promo from "../components/Promo";
import Clips from "../components/Clips";

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [artistGifs, setArtistGifs] = useState([]);

  // Trending Gifs
  useEffect(() => {
    async function fechData() {
      await axios
        .get(`/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=20`)
        .then((response) => {
          setTrending(response.data.data);
        })
        .catch((err) => console.log(err.response));
    }
    fechData();
  }, []);

  // Artist Gifs
  useEffect(() => {
    async function fechData() {
      await axios
        .get(`/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=6`)
        .then((response) => {
          setArtistGifs(response.data.data);
        })
        .catch((err) => console.log(err.response));
    }
    fechData();
  }, []);

  return (
    <LayoutBasic>
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
