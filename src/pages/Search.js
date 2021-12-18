import React, { useEffect, useState } from "react";
import LayoutBasic from "../layouts/LayoutBasic";
import { useParams, useHistory } from "react-router-dom";
import axios from "../api/axios";
import styled from "styled-components";
import { ImageList, ImageListItem } from "@mui/material";
import { Helmet } from "react-helmet";
import { LinearProgress } from "@material-ui/core";

export default function Search() {
  const params = useParams();
  const history = useHistory();
  const [results, setResults] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setResults(null);
    async function fechSearch() {
      try {
        const response = await axios.get(`/search?api_key=${process.env.REACT_APP_API_KEY}&q=${params.term}&limit=40&offset=0&rating=g&lang=en`);
        setResults(response.data.data)
        setTotalResults(response.data.pagination.total_count);
      }catch(err) {
        console.log(err)
      }
    }
    fechSearch();
  }, [params?.term])

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return (() => {
      window.removeEventListener('resize', updateWidth);
    })
  }, [width])

  const addGif = async () => {
    setOffset(offset + 40);
    try {
      const response = await axios.get(`/search?api_key=${process.env.REACT_APP_API_KEY}&q=${params.term}&limit=40&offset=${offset}&rating=g&lang=en`);
      const newData = response.data.data;
      if(results) {
        newData.forEach(item => {
          setResults(arr => [...arr, item]);
        })
      }
    }catch(err) {
      console.log(err)
    }
    console.log(results);
  }

  return (
    <LayoutBasic>
      <Helmet>
        <title>{params.term} GIFs - Encuentra y comparte en Giphy</title>
      </Helmet>
      <SearchContainer>
        <SearchHeader>
          <h1>{params.term}<span>{totalResults} GIFs</span></h1>
        </SearchHeader>
        {results ? (
        //   <SearchContent>
        //   {results?.map((item, index) => (
        //     <Gif key={index}>
        //       <Link to={`/gif/${item.id}`}>
        //         <img src={item.images?.original?.url} alt={item.title}/>
        //       </Link>
        //     </Gif>
        //   ))}
        // </SearchContent>
          <ImageList variant="masonry" cols={width>=960 ? 3 : width >= 600 ? 2 : 1} gap={8}>
            {results.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={item.images?.original?.url}
                  srcSet={`${item.images?.original?.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => history.push(`/gif/${item.id}`)}
                />
              </ImageListItem>
            ))}
          </ImageList>
        ):(
          <LinearProgress />
        )}
        <button onClick={addGif}>Mostrar mas resultados</button>
      </SearchContainer>
    </LayoutBasic>
  )
}

const SearchContainer = styled.div`

`;

const SearchHeader = styled.div`
  padding: 10px 0;
  display: flex;
  text-align: left;
  align-self: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
  hyphens: auto;
  overflow: hidden;

  h1 {
    span {
      color: rgb(166, 166, 166);
      padding-left: 0.4em;
      text-transform: none;
      font-size: 14px;
      white-space: pre;
      font-weight: 700;
    }
  }
`;