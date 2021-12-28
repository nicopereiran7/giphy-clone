import React from 'react';
import Slider from "react-slick";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function TrendingSearch({ trendingSearch }) {
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

  return (
    <TrendingSearchContainer>
      <h3>Busquedas mas realizadas</h3>
      <Carousel {...settings}>
        {trendingSearch.map((item, index) => (
          <SearchItem key={index} onClick={() => history.push(`/search/${item}`)}>
            <p>{item}</p>
          </SearchItem>
        ))}
      </Carousel>
    </TrendingSearchContainer>
  )
}

const TrendingSearchContainer = styled.div`
  padding: 20px 0;
  
  h3 {
    margin-bottom: 10px;
  }
`;

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

const SearchItem = styled.div`
  margin: 0 10px;
  background-color: #6157ff;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #3388FF;
  }

  p {
    padding: 10px 20px;
    text-align: center;
    color: #fff;
  }
`;

