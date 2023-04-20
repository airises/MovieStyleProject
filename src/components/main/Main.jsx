import React, { useState } from "react";
// import Modal from "../modal/AddMoviesModal";
import Button from "../UI/Button";
import ModalUse from "../modal/Modaluse";
import styled from "styled-components";

function Main({ movies, setMovies }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState(null);

  const onCLoseModal = () => {
    setDeleteModal(false);
  };

  const deleteTodo = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    onCLoseModal();
  };

  const openModal = (id) => {
    setDeleteModal(true);
    setMovieToDelete(id);
  };

  return (
    <div>
      {movies.map((el) => (
        <div key={el.id}>
          <CoverDiv>
            <FirstDiv>
              <Image src={el.url} />

              <SecondDiv>
                <h2>{el.title}</h2>
                <Rating>{el.rating}/5</Rating>
              </SecondDiv>
              <Div>
                <ButtonDelete onClick={() => openModal(el.id)}>
                  Delete
                </ButtonDelete>
              </Div>
            </FirstDiv>
          </CoverDiv>
        </div>
      ))}
      {deleteModal && (
        <ModalUse>
          <h2>Are you sure you want to delete it?</h2>
          <DivButton>
            <YesButton onClick={() => deleteTodo(movieToDelete)}>Yes</YesButton>
            <NoButton onClick={onCLoseModal}>No</NoButton>
          </DivButton>
        </ModalUse>
      )}
    </div>
  );
}

export default Main;

const Rating = styled.h3`
  background-color: #e3e96b;
  width: 50px;
  margin: 22px 70px;
  padding: 5px 8px 5px 8px;
  border-radius: 8px;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
`;

const CoverDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FirstDiv = styled.div`
  width: 40rem;
  height: 30vh;
  background-color: #f9ebde;
  display: flex;
  margin-top: 30px;
  border-radius: 12px;
  -webkit-box-shadow: 8px 13px 5px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 9px 13px 5px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 8px 13px 5px 0px rgba(34, 60, 80, 0.2);
`;

const SecondDiv = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  /* padding-top: 10px; */
`;

const Image = styled.img`
  width: 150px;
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
`;

const YesButton = styled(Button)`
  background-color: #76d076;
  padding: 10px 30px 10px 30px;
  &:hover {
    background-color: #215a21;
    &:active {
      background-color: #76d076;
    }
  }
`;
const NoButton = styled(Button)`
  background-color: #e30c0c;
  padding: 10px 30px 10px 30px;
  &:hover {
    background-color: #b13434;
    &:active {
      background-color: #e30c0c;
    }
  }
`;
const DivButton = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonDelete = styled(Button)`
  background-color: #7cbacf;

  &:hover {
    background-color: #2d6d82;
    &:active {
      background-color: #79afc1;
    }
  }
`;

