import React, { useEffect, useState } from "react";
import LayoutBasic from "../layouts/LayoutBasic";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LinearProgress } from "@material-ui/core";

export default function Search() {
  const params = useParams();
  const [results, setResults] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [offset, setOffset] = useState(0);

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
          <SearchContent>
          {results?.map((item, index) => (
            <Gif key={index}>
              <Link to={`/gif/${item.id}`}>
                <img src={item.images?.original?.url} alt={item.title}/>
              </Link>
            </Gif>
          ))}
        </SearchContent>
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

const SearchContent = styled.div`
  display: grid;
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Gif = styled.div`
  img {
    inset: 0px;
    display: block;
    object-fit: cover;
    width: 100%;
    opacity: 1;
    transition: 0.5s ease all;
  }
`