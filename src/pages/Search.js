import React, { useEffect, useState } from "react";
import LayoutBasic from "../layouts/LayoutBasic";
import { useParams, useHistory } from "react-router-dom";
import axios from "../api/axios";
import def_axios from "axios";
import styled from "styled-components";
import { ImageList, ImageListItem } from "@mui/material";
import { Helmet } from "react-helmet";
import { LinearProgress } from "@material-ui/core";
import TrendingSearch from "../components/Search/TrendingSearch";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Search() {
  const params = useParams();
  const history = useHistory();
  const [results, setResults] = useState(null);
  const [trendingSearch, setTrendingSearch] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [moreData, setMoreData] = useState(true);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setResults(null);
    async function fechSearch() {
      try {
        const response = await axios.get(`/search?api_key=${process.env.REACT_APP_API_KEY}&q=${params.term}&limit=20&offset=0&rating=g&lang=en`);
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

  useEffect(() => {
    async function fechTrendingSearch() {
      try {
        const response = await def_axios.get(`https://api.giphy.com/v1/trending/searches?api_key=${process.env.REACT_APP_API_KEY}`);
        setTrendingSearch(response.data.data);
      }catch(err) {
        console.log(err);
      }
    }
    fechTrendingSearch();
  }, [params?.term])

  const fetchResults = async () => {
    setOffset(results.length);
    try {
      const response = await axios.get(`/search?api_key=${process.env.REACT_APP_API_KEY}&q=${params.term}&limit=20&offset=${offset}&rating=g&lang=en`);
      
      return response.data.data;
    }catch(err) {
      console.log(err)
    }
  }

  const addGif = async () => {
    const newResults = await fetchResults();
    setResults([...results, ...newResults]);

    if(results.length >= totalResults ) {
      setMoreData(false);
    }
  }

  return (
    <LayoutBasic>
      <Helmet>
        <title>{params.term} GIFs - Encuentra y comparte en Giphy</title>
      </Helmet>
      <SearchContainer>
        {!trendingSearch ? (
          <LinearProgress />
        ) : (
          <TrendingSearch trendingSearch={trendingSearch}/>
        )}
        <SearchHeader>
          <h1>{params.term}<span>{totalResults} GIFs</span></h1>
        </SearchHeader>
        {results ? (
          <ImageList variant="masonry" cols={width>=960 ? 3 : width >= 600 ? 2 : 1} gap={8}>
            <InfiniteScroll
              dataLength={results.length}
              next={addGif}
              hasMore={moreData}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
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
          </InfiniteScroll>
          </ImageList>
        ):(
          <LinearProgress />
        )}
      </SearchContainer>
    </LayoutBasic>
  )
}

const SearchContainer = styled.div`
  .MuiImageListItem-root {
    width: 100%;
    object-fit: cover;

    &:hover {
      cursor: pointer;
    }
  }
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