import React, { useCallback, useState } from "react";
import LayoutBasic from "../layouts/LayoutBasic";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { Helmet } from "react-helmet";
import FinalizeUpload from "../components/FinalizeUpload";

export default function Upload() {  
  const [file, setFile] = useState(null);
  const [gifPreview, setGifPreview] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    const fileUploaded = acceptedFiles[0];
    setFile(fileUploaded);
    setGifPreview(URL.createObjectURL(fileUploaded));
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop, 
    accept: "video/mp4",
    noKeyboard: true
  })

  return (
    <LayoutBasic>
      <Helmet>
        <title>Sube y Comparte GIFs online - Giphy</title>
      </Helmet>
      {!file ? (
        <UploadContainer>
          <HeaderContent>
            <h1>GIPHY <span>Upload</span></h1>
            <p>Upload your collection to share on Facebook, Twitter, Instagram, text message, email, & everywhere else.</p>
          </HeaderContent>

          <MainSection>
            <ItemSection {...getRootProps()}>
              <input {...getInputProps()}/>
              <h2>GIF</h2>
              <p>Sube un Gif, MP4 o MOV</p>
              <div className="file">
                Elige un archivo
              </div>
            </ItemSection>
            <ItemSection>
              <h2>Sticker</h2>
              <p>Sube un Gif con transparencia</p>
              <div className="file">
                Elige un archivo
              </div>
            </ItemSection>
          </MainSection>

          <SecondarySection>
            <h2>Cualquier URL</h2>
            <p>We support media URLs from GIPHY, YouTube, Vimeo, & many others!</p>
            <InputContainer>
              <input placeholder="Ingresa cualquier link de un GIF"/>
            </InputContainer>
          </SecondarySection>
        </UploadContainer>
      ) : (
        <FinalizeUpload file={file} gif={gifPreview} setGifPreview={setGifPreview} setFile={setFile}/>
      )}
    </LayoutBasic>
  );
}

const UploadContainer = styled.div`
  padding: 80px 60px;
  background: linear-gradient(45deg, rgb(97, 87, 255) 0%, rgb(0, 204, 255) 100%);
  border-radius: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderContent = styled.div`
  width: 500px;

  h1, p {
    color: #fff;
    text-align: center;
  }

  @media (max-width: 824px) {
    width: 100%;
  }
`;

const MainSection = styled.div`
  display: grid;
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr)); 
  padding-top: 20px;
  width: 100%;

  @media (max-width: 824px) {
    grid-template-columns: repeat(1, minmax(0, 1fr)); 
  }
`;

const ItemSection = styled.div`
  background-color: rgba(236, 236, 236, 0.1);
  padding-top: 10px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: rgba(205, 150, 210, 0.1);
  }

  h2, p {
    text-align: center;
  }

  h2 {
    font-size: 16px;
  }

  p {
    margin-top: 20px;
    font-weight: lighter;
  }

  .file {
    margin-top: 20px;
    text-align: center;
    font-size: 10px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SecondarySection = styled.div`
  padding: 20px;
  width: 100%;
  background: rgba(236, 236, 236, 0.1);
  margin-top: 20px;

  h2 {
    font-size: 16px;
  }
`;

const InputContainer = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  margin-top: 10px;

  input {
    border: none;
    width: 100%;
    padding: 10px;

    &:focus {
      outline: none;
    }
  }
`;
