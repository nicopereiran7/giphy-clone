import React from 'react';
import styled from 'styled-components';
import { ImageList, ImageListItem } from "@mui/material";
import { useHistory } from "react-router-dom";
import useScreenSize from "../hooks/useScreenSize";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function GridGifs({ data, title, moreData, addGif, infinite = false }) {
  const history = useHistory();
  const width = useScreenSize();

  return (
    <GridGifsContainer>
      <TitleContainer>
        <h2>{title}</h2>
      </TitleContainer>
      <ImageList 
        variant="masonry" 
        cols={width >= 690 ? 3 : width >= 590 ? 2 : 1} 
        gap={8}
      >
        {infinite ? (
          <InfiniteScroll
            dataLength={data.length}
            next={addGif}
            hasMore={moreData}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            >
              {data.map((item, index) => (
                <ImageListItem
                  key={index}
                  onClick={() => history.push(`/gif/${item.id}`)}
                >
                  <img
                    src={item.images?.original?.url}
                    srcSet={`${item.images?.original?.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: '4px' }}
                  />
                </ImageListItem>
              ))}
          </InfiniteScroll>
        ) : 
        data.map((item, index) => (
          <ImageListItem
            key={index}
            onClick={() => history.push(`/gif/${item.id}`)}
          >
            <img
              src={item.images?.original?.url}
              srcSet={`${item.images?.original?.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ borderRadius: '4px' }}
            />
          </ImageListItem>
        ))}
        
      </ImageList>
    </GridGifsContainer>
  )
}

const GridGifsContainer = styled.div`
  .MuiImageListItem-root {
    width: 100%;

    img {
      width: 100%;
      object-fit: cover;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const TitleContainer = styled.div`
  margin: 10px 0;

  h2 {
    color: #a6a6a6;
    font-size: 14px;
    font-weight: 500;
  }
`;