import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory, useParams } from "react-router-dom";

export default function SearchBar() {
  const searchInput = useRef("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if(params.term) {
      searchInput.current.value = params.term;
    }
  }, [params?.term])

  const search = () => {
    history.push(`/search/${searchInput.current.value}`);
  }

  return (
    <FormContainer>
      <Form>
        <Input type="text" placeholder="Search all the GIFs" ref={searchInput}/>
        <ButtonSubmit onClick={search}>
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

const Form = styled.div`
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
