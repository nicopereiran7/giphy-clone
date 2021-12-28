import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Video from "../assets/video/jordan-speer-logo.mp4";
import { Helmet } from "react-helmet";

export default function Login() {
  return (
    <LoginContainer>
      <Helmet>
        <title>Iniciar Sesion - Encuentra y comparte GIFs en Giphy</title>
      </Helmet>
      <LeftContainer data-aos="fade-up">
        <video preload="auto" autoPlay loop>
          <source src={Video} type="video/mp4" />
        </video>
        <Container>
          <Header>
            <h1>GIPHY</h1>
            <h2>BE ANIMATED</h2>
            <SwitchContainer>
              <div className="login">Log In</div>
              <div className="sign-up">Sign Up</div>
            </SwitchContainer>
          </Header>
          <Form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Log in</button>
          </Form>
          <Password>
            <Link to="#">Forgot Your Password?</Link>
          </Password>
          <ButtonsContainer>
            <ButtonAuth>
              <FaFacebookSquare />
              <h3>Log In with Facebook</h3>
            </ButtonAuth>
            <ButtonAuth>
              <FaGoogle />
              <h3>Log In with Google</h3>
            </ButtonAuth>
          </ButtonsContainer>
          <Description>
            <p>
              By logging in you agree to GIPHY's{" "}
              <Link to="#">Terms of Service</Link>
            </p>
          </Description>
        </Container>
      </LeftContainer>
      <RightContainer>
        <video preload="auto" autoPlay loop>
          <source src={Video} type="video/mp4" />
        </video>
      </RightContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
`;

const LeftContainer = styled.div`
  flex: 0.5;
  position: relative;
  display: inline-block;

  video {
    width: 100%;
    object-fit: cover;
    height: 100%;
    filter: blur(45px);
  }
`;

const Container = styled.div`
  min-width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header = styled.div`
  text-align: center;

  h1 {
    font-size: 5rem;
  }
`;

const SwitchContainer = styled.div`
  margin: 10px 0;
  width: 100%;
  border-radius: 25px;
  background: rgb(33, 33, 33);
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-shadow: rgb(0 0 0 / 20%) 1px 1px 1px;

  .login {
    flex: 0.5;
    padding: 10px 0;
    width: 100%;
    border-radius: 25px;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s;
    background: linear-gradient(
      -135deg,
      rgb(0, 231, 149) 0%,
      rgb(0, 187, 221) 100%
    );
  }

  .sign-up {
    flex: 0.5;
  }
`;

const Form = styled.form`
  display: grid;

  input {
    padding: 8px 12px;
    margin-top: 10px;
    border-radius: 6px;
    font-size: 18px;
    font-weight: lighter;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 10px;
    margin-top: 10px;
    background: linear-gradient(
      -135deg,
      rgb(97, 87, 255) 0%,
      rgb(153, 51, 255) 100%
    );
    color: #fff;
    border: none;
  }
`;

const Password = styled.div`
  margin: 10px 0;
  text-align: center;
  a {
    color: rgb(0, 204, 255);
    font-size: 12px;
    text-decoration: none;
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 10px;
`;

const ButtonAuth = styled.div`
  padding: 8px 12px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121212;
  transition: 0.3s ease all;

  h3 {
    font-size: 14px;
    margin-left: 6px;
  }

  &:hover {
    cursor: pointer;
    background-color: #000;
  }
`;

const RightContainer = styled.div`
  flex: 0.5;
  position: relative;
  display: inline-block;

  video {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;

const Description = styled.div`
  text-align: center;
  margin-top: 10px;

  p {
    font-size: 12px;

    a {
      color: rgb(0, 204, 255);
      text-decoration: none;
    }
  }
`;
