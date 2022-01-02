import React, { useState } from 'react';
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io"
import { AiFillTags, AiOutlineClose } from "react-icons/ai";

export default function FinalizeUpload({ file, gif }) {
  const [tags, setTags] = useState(["hola","afsaf", "asfaf"]);
  const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   if(file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setBinaryFile(reader.result);
  //     }
  //     reader.readAsDataURL(file);
  //   }
  // }, [file])

  const onChange = (e) => {
    const { value } = e.target
    setInputValue(value);
  }

  const addTag = () => {
    setTags([...tags, inputValue]);
    setInputValue("");
  }

  const deleteTag = (index) => {
    setTags(() => tags.filter((_, i) => i !== index));
  }

  return (
    <FileUpload>
      <FinalizeUploadContainer>
        <ColumnGridGif>
          <GifDataContainer>
            <div className="avatar">
              <video autoPlay={false} loop={false} muted>
                <source src={gif} type="video/mp4"/>
              </video>
            </div>
            <h2>{file.name}</h2>
          </GifDataContainer>
          <GifContainer>
            <video autoPlay={true} loop={true} muted>
              <source src={gif} type="video/mp4"/>
            </video>
          </GifContainer>
        </ColumnGridGif>
        <ColumnGridInfo>
          <AddDataContainer>
            <h2>Agregar Informacion</h2>

            <Section>
              <div className="title">
                <AiFillTags />
                <h3>Visibilidad</h3>
              </div>
            </Section>
            <p className="more">Todos pueden ver esto. <a href="https://support.giphy.com/hc/en-us/articles/360020233051-Get-Your-GIFs-Stickers-Into-GIPHY-s-Search-" target="_blank" rel="noreferrer">Leer Mas</a></p>
            <Section>
              <div className="title">
                <AiFillTags />
                <h3>Agregar Tags</h3>
              </div>
    
              <InputContainer>
                <input 
                  type="text" 
                  placeholder="Añadir Tags"
                  value={inputValue}
                  onChange={onChange}
                />
                <div className="btn" onClick={addTag}>
                  <IoMdAdd />
                </div>
              </InputContainer>

              <TagsContainer>
                {tags.map((tag, index) => (
                  <Tag key={index}>
                    {tag}
                    <AiOutlineClose onClick={() => deleteTag(index)}/>
                  </Tag>
                ))}
              </TagsContainer>

              <p>Los tags ayudan a encontrar tu contenido. Separa tus tags con comas, para agregar multiples tags.</p>
            </Section>

            <Section>
              <p>By clicking "Upload to GIPHY" you agree to our Terms of Service, Community Guidelines, and our Privacy Policy.</p>
            </Section>
          </AddDataContainer>

          <UploadBtnContainer>
            <button className="upload-btn">Subir a GIPHY</button>
          </UploadBtnContainer>
        </ColumnGridInfo>
      </FinalizeUploadContainer>
    </FileUpload>
  )
}

const FileUpload = styled.div`
  min-height: 78vh;
  display: grid;
  place-items: center;
`;

const FinalizeUploadContainer = styled.div`
  display: grid;
  grid-gap: 0;
  gap: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-radius: 4px;

  @media (max-width: 1028px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const ColumnGridGif = styled.div`
  background-color: #161616;
  padding: 40px 20px;
`;

const ColumnGridInfo = styled.div`
  background-color: #313131;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AddDataContainer = styled.div`
  h2 {
    font-size: 16px;
  }

  .more {
    font-size: 12px;
  }
`;

const UploadBtnContainer = styled.div`
  .upload-btn {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    width: 100%;
    padding: 8px 0;
    background: linear-gradient(45deg, rgb(97, 87, 255) 0%, rgb(153, 51, 255) 33%, rgb(97, 87, 255) 66%, rgb(153, 51, 255) 100%) 0px 100% / 300% 300%;
    border: none;
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  }
`;

const GifDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;

  .avatar {
    width: 50px;
    height: 100%;
    flex-shrink: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 50px;

    video {
      width: 100%;
      object-fit: cover;
    }
  }
  
  h2 {
    font-size: 12px;
  }
`

const GifContainer = styled.div`
  margin-top: 10px;

  video {
    width: 100%;
    object-fit: cover;
  }
`;

const Section = styled.div`
  padding: 20px 0;

  .title {
    display: flex;
    align-items: center;

    h3 {
      font-size: 14px;
      color: #9A9A9A;
    }

    svg {
      color: #9A9A9A;
    }
  }

  p {
    font-size: 12px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  input {
    flex-grow: 1;
    border: none;
    padding: 8px;
    font-size: 12px;
    height: 100%;

    &:focus {
      outline: none;
    }
  }

  .btn {
    background-color: #3C8AFF;
    padding: 6px;

    &:hover {
      cursor: pointer;
    }

    svg {
      position: relative;
      top: 2px;
    }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
`;

const Tag = styled.div`
  background-color: #161616;
  padding: 6px 10px;
  font-size: 12px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  transform: translateY(0px);

  svg {
    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      color: #3C8AFF;
      
    }
  }

  &:hover {
    transform: translateY(4px);
    cursor: pointer;
  }
`;
