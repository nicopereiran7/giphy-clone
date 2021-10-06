import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default function SliderArtistGif({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <Carousel {...settings}>
      {data.map((gif) => (
        <Wrap key={gif.id}>
          <img src={gif.images.original.url} alt={gif.title} />
          <InfoContainer>
            <Avatar src={gif.user?.avatar_url} alt="" />
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
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    padding: 0 4px;
    max-height: 240px;
    object-fit: cover;
    border-radius: 6px;
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 10px;
  left: 10px;
`;

const Avatar = styled.img`
  max-width: 50px;
  object-fit: cover;
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
