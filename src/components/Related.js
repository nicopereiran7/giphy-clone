import React, { useState, useEffect } from "react";
import { ImageList, ImageListItem, LinearProgress } from "@mui/material";
import styled from "styled-components"
import axios from "../api/axios";
import { useHistory, useParams } from "react-router-dom";

export default function Related() {
  const [relatedGifs, setRelatedGifs] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const history = useHistory();
  const params = useParams();

  const updateWidth = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    async function fechRelatedGifs() {
      setRelatedGifs([]);
      try {
        let offset = Math.floor(Math.random() * 100) + 1;
        const response = await axios.get(`/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=8&offset=${offset}`);
        setRelatedGifs(response.data.data);
      }catch (e) {
        console.log(e);
      }
    }
    fechRelatedGifs()
  }, [params?.id])

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return (() => {
      window.removeEventListener('resize', updateWidth);
    })
  }, [width])

  return (
    <RelatedContainer>
      <div className="header">
        <h1>Related GIFs</h1>
      </div>
      {relatedGifs.length === 0 ? (
        <LinearProgress />
      ) : (
        <ImageList variant="masonry" cols={width>=690 ? 3 : 2} gap={8}>
          {relatedGifs?.map((item, index) => (
            <ImageListItem key={index} onClick={() => history.push(`/gif/${item.id}`)}>
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
      )}
    </RelatedContainer>
  )
}

const RelatedContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 20px;

  .header {
    padding-bottom: 10px;

    h1 {
      font-size: 14px;
    }
  }

  .MuiImageListItem-root {
    img {
      &:hover {
        cursor: pointer;
      }
    }
  }
`