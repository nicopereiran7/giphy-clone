import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayoutBasic from "../layouts/LayoutBasic";
import axios from "../api/axios";
import styled from "styled-components";
import { LinearProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Gif() {
  const params = useParams();
  const [gif, setGif] = useState(null);

  useEffect(() => {
    async function fechGif() {
      try {
        const response = await axios.get(`/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`);
        if(response.status === 200) {
          console.log(response.data.data);
          setGif(response.data.data)
        }
      }catch(err) {
        console.log(err);
      }
    }
    fechGif();
  }, [params.id])

  return (
    <LayoutBasic>
      {!gif ? (
        <LinearProgress />
      ):(
        <GifContent>
          <SideBar>
            <UserData>
              {gif.user ? (
                <div className="avatar">
                <img src={gif.user.avatar_url} alt={gif.user.username}/>
                <div className="data">
                  <Link to={`/user/${gif.user.username}`}><h2>{gif.user.display_name}</h2></Link>
                  <h3>{gif.user.username}</h3>
                </div>
              </div>
              ):(
                <h2>No hay usuario</h2>
              )}
            </UserData>
          </SideBar>
          <Container>
            <GifTitle>{gif?.title}</GifTitle>
            <MainGif>
              <ImgContainer>
                <img src={gif.images?.original?.url} alt={gif.title} poster={gif.images.preview.mp4} />
              </ImgContainer>
              <IconsContainer></IconsContainer>
            </MainGif>
          </Container>
        </GifContent>
      )}
    </LayoutBasic>
  )
}

const GifContent = styled.div`
  display: flex;
  padding: 30px 0;
`;

const SideBar = styled.div`
  flex: 0.22;
`;

const Container = styled.div`
  flex: 0.78;
`;

const GifTitle = styled.h1`
  font-size: 14px;
  padding-bottom: 10px;
  color: #a6a6a6;
  flex-grow: 1;
`;

const MainGif = styled.div`
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 0.7;

  img {
    width: 100%;
  }
`

const IconsContainer = styled.div`
  flex: 0.3;
`;

const UserData = styled.div`
  .avatar {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      object-fit: cover;
    }

    .data {
      margin-left: 8px;
      
      a {
        text-decoration: none;
      }

      h2 {
        color: #fff;
        font-size: 14px;
      }

      h3 {
        color: #a6a6a6;
        font-size: 12px;
      }
    }
  }
`;
