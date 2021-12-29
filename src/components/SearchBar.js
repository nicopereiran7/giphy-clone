import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function SearchBar(props) {
  const searchInput = useRef("");
  const history = useHistory();
  const params = useParams();
  const [autocompleteResults, setAutocompleteResults] = useState(null);

  useEffect(() => {
    setAutocompleteResults(null);

    if(params.term) {
      searchInput.current.value = params.term;
    }
  }, [params?.term])

  useEffect(() => {
    if(searchInput.current.value === "") {
      setAutocompleteResults(null);
    }
  }, [searchInput.current.value])

  const search = () => {
    history.push(`/search/${searchInput.current.value}`);
    setAutocompleteResults(null);
  }

  const autocomplete = async () => {
    try {
      const { data: response } = await axios.get(`https://api.giphy.com/v1/gifs/search/tags?api_key=${process.env.REACT_APP_API_KEY}&q=${searchInput.current.value}&limit=10`);
      setAutocompleteResults(response.data);
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <FormContainer>
      <Form onChange={autocomplete}>
        <Input type="text" placeholder="Search all the GIFs" ref={searchInput}/>
        <ButtonSubmit onClick={search}>
          <AiOutlineSearch />
        </ButtonSubmit>
      </Form>
      {autocompleteResults && (
        <SuggestionsContainer>
          <AutocompleteHeader>
            <CloseAutocomplete onClick={() => setAutocompleteResults(null)}>
              <AiOutlineClose />
            </CloseAutocomplete>
          </AutocompleteHeader>
          {autocompleteResults.map((item, index) => (
            <AutocompleteItem key={index} onClick={() => history.push(`/search/${item.name}`)}>
              <h5>{item.name}</h5>
            </AutocompleteItem>
          ))}
        </SuggestionsContainer>
      )}
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

const SuggestionsContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #121212;
  margin-top: 56px;
  overflow: hidden;
  z-index: 10;
`
const AutocompleteHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AutocompleteItem = styled.div`
  padding: 10px 20px;
  width: 100%;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: #7067ff;
    cursor: pointer;
  }

  h5 {
    color: #fff;
  }
`

const CloseAutocomplete = styled.div`
  width: 56px;
  padding: 10px 20px;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: #7067ff;
    cursor: pointer;
  }
`;