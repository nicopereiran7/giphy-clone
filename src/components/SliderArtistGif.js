import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { LinearProgress } from "@mui/material";
import { useHistory } from "react-router-dom";
import useScreenSize from "../hooks/useScreenSize";

export default function SliderArtistGif({ data }) {
  const width = useScreenSize();
  const history = useHistory();

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: width >= 1000 ? 3 : width >= 700 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  if(!data) {
    return <LinearProgress />
  }

  return (
    <Carousel {...settings}>
      {data.map((gif) => (
        <Wrap key={gif.id}>
          <img 
            src={gif.images.original.url} 
            alt={gif.title} 
            className="gif" 
            onClick={() => history.push(`/gif/${gif.id}`)}
          />
          <InfoContainer>
            <Avatar>
              <img src={gif.user?.avatar_url} alt=""/>
            </Avatar>
            <Data>
              <h3>{gif?.username}</h3>
              <h4>{gif.user?.display_name}</h4>
            </Data>
          </InfoContainer>
        </Wrap>
      ))}
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    width: 5vw;
    height: 100%;
    z-index: 1;
    transition: opacity 0.3s ease 0s;

    &:hover {
      opacity: 1;
    }
  }

  ul li button {
    display: none;

    &:before {
      font-size: 10px;
      color: rgb(150, 150, 171);
      transition: 0.3s ease all;
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-prev {
    right: -75px;
  }
`;

const Wrap = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  top: 0;
  left: 0;

  .gif {
    width: 100%;
    height: 260px;
    padding: 0 4px;
    object-fit: cover;
    border-radius: 6px;

    &:hover { 
      cursor: pointer;
    }
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  height: 36px;
`;

const Avatar = styled.div`
  float: left;
  height: 36px;
  margin-right: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Data = styled.div`
  h3 {
    font-size: 14px;
  }

  h4 {
    font-size: 10px;
    color: greenyellow;
  }
`;
