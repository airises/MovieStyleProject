import styled from "styled-components";
import Button from "../UI/Button";
import { useState } from "react";
import Main from "../main/Main";
import AddMovieModal from "../modal/AddMoviesModal";

function Header() {
  const [openModal, setOpenModal] = useState(false);

  const [movies, setMovies] = useState([
    {
      id: "1",
      title: "Howl's Moving Castel",
      rating: 4,
      url: "https://i.pinimg.com/564x/5f/27/cc/5f27cc918419a3aec8d47920e38aa604.jpg",
    },

    {
      id: "2",
      title: "My Neighbor Totoro ",
      rating: 5,
      url: "https://i.pinimg.com/564x/bf/45/07/bf45072b5b1e2537db65c1d911f9218e.jpg",
    },

    {
      id: "3",
      title: "Spirited Away",
      rating: 5,
      url: "https://i.pinimg.com/564x/e3/9c/08/e39c0811da006645e8ba1b926e2d5a48.jpg",
    },

    {
      id: "4",
      title: "The Wind Rises",
      rating: 5,
      url: "https://i.pinimg.com/564x/ef/f5/e2/eff5e276c142f4c3b6cb859e5d3d2eea.jpg",
    },
  ]);

  const toggleModalHadler = () => {
    setOpenModal((openModal) => !openModal);
  };

  return (
    <>
      <HeaderDiv>
        <Heading>Favorite Movie</Heading>
        <Button onClick={toggleModalHadler}>Add movies</Button>
      </HeaderDiv>
      {openModal && (
        <AddMovieModal
          toggleModalHadler={toggleModalHadler}
          movies={movies}
          setMovies={setMovies}
        />
      )}
      <Main
        movies={movies}
        setMovies={setMovies}
        openModal={openModal}
        toggleModalHadler={toggleModalHadler}
      />
    </>
  );
}

export default Header;

const HeaderDiv = styled.div`
  background-color: rgb(40, 40, 165);
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
`;
const Heading = styled.h1`
  color: #fff;
  text-align: left;
  margin-left: 40px;
`;
