import React, { useRef } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import ModalUse from "./Modaluse";

function AddMovieModal({
  toggleModalHadler,
  movies,
  setMovies,
  title,
  url,
  rating,
}) {
  const titleValue = useRef();
  const urlValue = useRef();
  const ratingValue = useRef();

  const submitHandler = () => {
    console.log("ref", titleValue.current);
    const data = {
      id: Date.now().toString(),
      title: titleValue.current.value,
      url: urlValue.current.value,
      rating: ratingValue.current.value,
    };
    setMovies([...movies, data]);
    console.log(data, "data");

    titleValue.current.value = "";
    urlValue.current.value = "";
    ratingValue.current.value = "";
  };

  return (
    <>
      <ModalUse onClose={toggleModalHadler}>
        <InputLabels>
          movie title:
          <InputCont
            type="text"
            value={title}
            placeholder="movies name"
            ref={titleValue}
          />
        </InputLabels>
        <InputLabels>
          movie URL:
          <InputCont type="URL" value={url} placeholder="URL" ref={urlValue} />
        </InputLabels>
        <InputLabels>
          movie rating:
          <InputCont
            type="number"
            value={rating}
            placeholder="movies rating"
            min="1"
            max="5"
            ref={ratingValue}
          />
        </InputLabels>
        <ButtonDiv>
          <TwoButtons onClick={toggleModalHadler}>Cancel</TwoButtons>
          <TwoButtons
            onClick={() => {
              submitHandler();
              toggleModalHadler();
              console.log(TwoButtons);
            }}
          >
            Add
          </TwoButtons>
        </ButtonDiv>
      </ModalUse>
    </>
  );
}

export default AddMovieModal;

const InputLabels = styled.label`
  font-size: 1.3rem;
  text-transform: capitalize;
`;

const TwoButtons = styled.button`
  font: inherit;
  font-weight: 500;
  padding: 0.6rem 2rem;
  border: none;
  background: #17429f;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  margin: 0 0.5rem;
  margin-top: 25px;
  text-transform: uppercase;
  &:hover {
    background: #2b64c0;
    &:active {
      background: #00329e;
    }
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-left: 80px;
`;

const InputCont = styled.input`
  margin: 10px 10px 10px 0px;
  background-color: #f5efe2;
  color: #333333;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
  width: 360px;
  text-align: left;
  border: none;
  height: 35px;
  display: flex;
  &:hover {
    background-color: #e8e3cf;
  }
  &:active {
    background-color: #f5efe2;
  }
`;
