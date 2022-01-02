import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineMore } from "react-icons/ai";
import Logo from "../assets/svg/giphy-logo-1.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import HamburgerMenu from "./HamburgerMenu";
import useScreenSize from "../hooks/useScreenSize";
import DropdownCategories from "../components/DropDownCategories";

export default function NavBar() {
  const width = useScreenSize();
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  return (
    <NavContainer>
      <Left data-aos="fade-left">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Link to="/" className="logo-name">
          <h1>GIPHY</h1>
        </Link>
      </Left>
      <Center>
        <Link to="#" className="nav-item">Reactions</Link>
        <Link to="/entertaiment" className="nav-item">Entertainment</Link>
        <Link to="/sport" className="nav-item">Sports</Link>
        <Link to="#" className="nav-item">Stickers</Link>
        <Link to="#" className="nav-item">Artists</Link>
        <div className="nav-item dropdown">
          <AiOutlineMore />
          <div className="dropdown-content">
            <DropdownCategories />
          </div>
        </div>
      </Center>
      {width >= 590 ? (
        <Right>
          <Btns>
            <ButtonOption to="/upload">Upload</ButtonOption>
            <ButtonOption to="#">Create</ButtonOption>
          </Btns>
          <AuthContainer>
            <ButtonLogin to="/login">Log in</ButtonLogin>
          </AuthContainer>
        </Right>
      ) : 
      !hamburgerIsOpen ? (
        <GiHamburgerMenu onClick={() => setHamburgerIsOpen(true)}/>
      ) : ( 
        <>
          <IoClose onClick={() => setHamburgerIsOpen(false)} style={{ zIndex: 9999 }}/>
          <HamburgerMenu hamburgerIsOpen={hamburgerIsOpen}/>
        </>
      )}
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

  .logo-name {
    text-decoration: none;
    color: #fff;
    font-weight: 800;
    margin-left: 6px;
    transition: 0.5s;
    transform-origin: left;

    @media (max-width: 500px) {
      display: none;
    }
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;

  @media(max-width: 1500px) {
    display: none;
  }

  .nav-item {
    font-family: 'Open Sans', sans-serif;
    position: relative;
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
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

  .dropdown .dropdown-content {
    display: none;
    position: absolute;
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 2;
    animation: 0.5s ease 0s 1 normal none running;
    border-top: 8px solid rgb(18, 18, 18);
    width: 1104px;
    top: 38px;
    left: 100%;
    margin-left: -745px;
    flex-direction: column;
    cursor: default;
    background: linear-gradient(135deg, rgb(230, 70, 182) 0%, rgb(153, 51, 255) 100%);
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Btns = styled.div`
  @media(max-width: 1000px) {
    display: none;
  }
`;

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
