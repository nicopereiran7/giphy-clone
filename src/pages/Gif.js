import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayoutBasic from "../layouts/LayoutBasic";
import axios from "../api/axios";
import styled from "styled-components";
import { LinearProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdFavorite, MdSend, MdContentCopy } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import Related from "../components/Related";

export default function Gif() {
  const params = useParams();
  const [gif, setGif] = useState(null);

  useEffect(() => {
    async function fechGif() {
      setGif(null)
      try {
        const response = await axios.get(`/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`);
        if(response.status === 200) {
          setGif(response.data.data);
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
                    <h3 onClick={() => window.open(gif.user.profile_url, '_blank')}>@{gif.user.username} {gif.user.is_verified && <GoVerified />}</h3>
                  </div>
                </div>
              ):(
                <h2>No hay usuario</h2>
              )}
            </UserData>
            <Networks>
              <div className="title">
                <h2>Siguenos en</h2>
              </div>
              <div className="icons">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
              </div>
            </Networks>
          </SideBar>
          <Container>
            <GifTitle>{gif?.title}</GifTitle>
            <MainGif>
              <ImgContainer>
                {/* <img src={gif.images?.original?.url} alt={gif.title} poster={gif.images.preview.mp4} /> */}
                <video autoPlay={true} loop={true} muted>
                  <source src={gif.images?.original?.mp4} type="video/mp4"/>
                </video>
              </ImgContainer>
              <IconsContainer>
                <div className="item-icon">
                  <MdFavorite />
                  <h3>Favoritos</h3>
                </div>
                <div className="item-icon">
                  <MdSend />
                  <h3>Compartir</h3>
                </div>
                <div className="item-icon">
                  <MdContentCopy />
                  <h3>Embed</h3>
                </div>
              </IconsContainer>
            </MainGif>
            <Related />
          </Container>
        </GifContent>
      )}
    </LayoutBasic>
  )
}

const GifContent = styled.div`
  display: flex;
  padding: 30px 0;

  @media (max-width: 960px) {
    display: inline-block;
    width: 100%;
  }
`;

const SideBar = styled.div`
  flex: 0.22;

  @media (max-width: 960px) {
    flex: 1;
  }
`;

const Container = styled.div`
  flex: 0.78;

  @media (max-width: 960px) {
    flex: 1;
    margin-top: 20px;
  }
`;

const GifTitle = styled.h1`
  font-size: 14px;
  padding-bottom: 10px;
  color: #a6a6a6;
  flex-grow: 1;
`;

const MainGif = styled.div`
  display: flex;

  @media (max-width: 690px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  flex: 0.7;

  @media (max-width: 590px) {
    width: 100%;
  }

  img {
    width: 100%;
  }

  video {
    width: 100%;
  }
`

const IconsContainer = styled.div`
  flex: 0.3;
  display: inline-block;
  margin-left: 30px;

  @media (max-width: 690px) {
    display: flex;
    align-items: center;
    margin-left: 0;
    padding: 20px 0;
  }

  .item-icon {
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;

    @media (max-width: 690px) {
      padding-bottom: 0;
      flex-grow: 1;
      justify-content: center
    }

    svg {
      font-size: 22px;
    }

    h3 {
      padding-left: 10px;
      font-size: 14px;
    }

    &:hover {
      cursor: pointer;
      color: #a6a6a6;
    }
  }
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
        display: flex;
        align-items: center;

        &:hover {
          cursor: pointer;
        }

        svg {
          color: #16C8EA;
        }
      }
    }
  }
`;

const Networks = styled.div`
  .title {
    padding: 20px 0;

    h2 {
      color: #fff;
      font-size: 12px;
    }
  }

  .icons {
    display: flex;

    svg {
      margin-right: 10px;
      transform: translateY(4px);
      transition: transform .3s ease-in-out;

      &:hover {
        cursor: pointer;
        transform: translateY(0);
      }
    }
  }
`