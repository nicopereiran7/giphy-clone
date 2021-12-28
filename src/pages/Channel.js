import React, { useEffect, useState } from "react";
import LayoutBasic from "../layouts/LayoutBasic";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LinearProgress } from "@mui/material";
import styled from "styled-components";
import { GoVerified } from "react-icons/go";

export default function Channel() {
  const [channel, setChannel] = useState(null);
  const [status, setStatus] = useState(null);
  const params = useParams();
  
  useEffect(() => {
    async function fetchChannel() {
      try {
        const response = await axios.get(`https://api.giphy.com/v1/channels/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`);
        if(response.status === 200) {
          setChannel(response.data.data);
        }
        setStatus(response.status);
      }catch (e) {
        setStatus(e.response.status);
      }
    }
    fetchChannel();
  }, [params?.id])

  return (
    <LayoutBasic>
      {!status ? (
        <LinearProgress />
      ) : (
        <ChannelMainContent>
          {status === 0 ? (
            <>
            <ChannelBanner>
              <img src={channel.banner_image} alt={channel.display_name}/>
            </ChannelBanner>

            <ChannelContent>
              <ChannelSideBarContent>
                <AvatarContainer>
                  <img src={channel.user.avatar_url} alt={channel.user.display_name}/>
                </AvatarContainer>

                <p>{channel.user.description}</p>

                <a href={channel.user.website_url} target="_blank" rel="noreferrer">{channel.user.website_url.replace(/(^\w+:|^)\/\//, '')}</a>
              </ChannelSideBarContent>

              <ChannelCenterContent>
                <h1>{channel.display_name}</h1>
                <h3 onClick={() => window.open(channel.user.profile_url, '_blank')}>@{channel.user.username} {channel.user.is_verified && <GoVerified />}</h3>
              </ChannelCenterContent>
            </ChannelContent>
            </>
          ) : (
            <h1>Canal no encontrado</h1>
          )}
        </ChannelMainContent>
      )}
    </LayoutBasic>
  )
}

const ChannelMainContent = styled.div`
  margin: 20px 0;
`;

const ChannelBanner = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`

const ChannelContent = styled.div`
  display: flex;
  margin: 20px 0;
`;

const ChannelSideBarContent = styled.div`
  flex: 0.25;

  p {
    margin: 20px 0;
    color: rgb(166, 166, 166);
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
  }
`;

const ChannelCenterContent = styled.div`
  flex: 0.75;
  margin-left: 20px;

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
`

const AvatarContainer = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;