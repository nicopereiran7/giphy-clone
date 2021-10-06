import React from "react";
import styled from "styled-components";

export default function Promo() {
  return (
    <PromoContainer>
      <img
        src="https://media.giphy.com/headers/2021-09-10-31-1631280661/GIPHY_Gif_Banners_Web_1040x96.gif"
        alt=""
      />
    </PromoContainer>
  );
}

const PromoContainer = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;
