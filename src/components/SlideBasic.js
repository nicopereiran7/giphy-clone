import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { LinearProgress } from "@mui/material";
import { useHistory } from "react-router-dom";

export default function SlideBasic({ data }) {
  const history = useHistory();
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  if(!data) return <LinearProgress />

  return (
    <Carousel {...settings}>
      {data?.map((gif) => (
        <Wrap key={gif.id} onClick={() => history.push(`/gif/${gif.id}`)}>
          <img src={gif.images.original.url} alt={gif.title} />
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
    max-height: 130px;
    object-fit: cover;
    border-radius: 6px;
  }
`;
