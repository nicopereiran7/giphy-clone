import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <FormContainer>
      <Form>
        <Input type="text" placeholder="Search all the GIFs" />
        <ButtonSubmit type="submit">
          <AiOutlineSearch />
        </ButtonSubmit>
      </Form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  margin: 0;
  background-color: #121212;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Form = styled.form`
  padding: 4px 0;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  font-size: 20px;
  border: none;
  padding: 12px 20px;

  &:focus {
    outline: none;
    border: none;
  }
`;

const ButtonSubmit = styled.button`
  background: linear-gradient(
    45deg,
    rgb(153, 51, 255) 0%,
    rgb(255, 102, 102) 100%
  );
  border: none;
  padding: 6px;

  svg {
    font-size: 2.1rem;
    color: #fff;
  }

  &:hover {
    cursor: pointer;
  }
`;
