import React, { useState, useEffect } from "react";
import { LinearProgress } from "@mui/material";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getRandomTrendingGif } from "../api/giphy.api";
import GridGifs from "./GridGifs";

export default function Related() {
  const [relatedGifs, setRelatedGifs] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fechRelatedGifs() {
      setRelatedGifs([]);
      let offset = Math.floor(Math.random() * 100) + 1;
      const data = await getRandomTrendingGif(offset);
      setRelatedGifs(data);
    }
    fechRelatedGifs()
  }, [params?.id])

  return (
    <RelatedContainer>
      {relatedGifs.length === 0 ? (
        <LinearProgress />
      ) : (
        <GridGifs data={relatedGifs} title="Related GIFs"/>
      )}
    </RelatedContainer>
  )
}

const RelatedContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 20px;
`