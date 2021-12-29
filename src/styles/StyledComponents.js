import styled from "styled-components";

export const SideBarContainer = styled.div`
  flex: 0.25;

  .title {
    text-transform: uppercase;
    font-size: 18px;
  }
`;

export const MainContainer = styled.div`
  flex: 0.75;
  margin-left: 40px;
`;

export const TitleContainer = styled.div`
  h1 {
    color: #fff;
    font-size: 30px;
    font-weight: 800;
  }

  p {
    color: #a6a6a6;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const Description = styled.p`
  color: #a6a6a6;
  font-size: 14px;
  font-weight: 500;
  margin: 10px 0;
`;