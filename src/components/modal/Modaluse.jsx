// import React, { Children } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
const ModalnContainer = styled.div`
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #00000042;
  animation: all 0.2s ease-in-out forwards;
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Backdrop  = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1c1005b0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
`;

function ModalUse({ children, onClose }) {
  return (
    <>
      {createPortal(
        <>
          <Backdrop onClick={onClose}>
            <ModalnContainer onClick={(e) => e.stopPropagation()}>{children}</ModalnContainer>
          </Backdrop>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default ModalUse;
