import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineMore } from "react-icons/ai";
import Logo from "../assets/svg/giphy-logo-1.svg";

export default function NavBar() {
  return (
    <NavContainer>
      <Left data-aos="fade-left">
        <img src={Logo} alt="logo" />
        <Link to="/">
          <h1>GIPHY</h1>
        </Link>
      </Left>
      <Center>
        <Link to="#">Reactions</Link>
        <Link to="#">Entertaiment</Link>
        <Link to="/upload">Sports</Link>
        <Link to="#">Stickers</Link>
        <Link to="#">Artists</Link>
        <Link to="#">
          <AiOutlineMore />
        </Link>
      </Center>
      <Right>
        <Btns>
          <ButtonOption to="/upload">Upload</ButtonOption>
          <ButtonOption to="#">Create</ButtonOption>
        </Btns>
        <AuthContainer>
          <ButtonLogin to="/login">Log in</ButtonLogin>
        </AuthContainer>
      </Right>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  margin-top: 10px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100%;
    object-fit: cover;
    height: 30px;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 800;
    margin-left: 6px;
    transition: 0.5s;
    transform-origin: left;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;

  a {
    position: relative;
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    border-bottom: 4px solid #7067ff;
    margin-right: 4px;

    svg {
      font-size: 12px;
    }

    &:after {
      content: "";
      position: absolute;
      left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      background: rgb(18, 70, 131);
      background: linear-gradient(
        117deg,
        rgba(18, 70, 131, 1) 0%,
        rgba(175, 28, 135, 1) 100%
      );
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }

    &:hover:after {
      cursor: pointer;
      opacity: 1;
      z-index: -1;
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Btns = styled.div``;

const ButtonOption = styled(Link)`
  padding: 8px 16px;
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  background-color: #7067ff;
  margin-left: 4px;
`;

const AuthContainer = styled.div``;

const ButtonLogin = styled(Link)`
  padding: 8px 40px;
  text-decoration: none;
  color: #fff;
  background-color: #494949;
  font-size: 14px;
  margin-left: 4px;
`;
