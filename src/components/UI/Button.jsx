import React from "react";
import styled from "styled-components";

function Button({ children, ...otherProps }) {
  return (
    <div>
      <Buttons {...otherProps}>{children}</Buttons>
    </div>
  );
}

export default Button;

const Buttons = styled.button`
  /* width: 100px; */
  padding: 12px 20px 12px 20px;
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 9px;
  text-transform: uppercase;
  margin-right: 40px;
  font-weight: 550;
  font-size: 1.1rem;
  background-color: #e4ab42;
  color: #fff;
  border: none;

  cursor: pointer;
  &:hover {
    background-color: #a17f3e;
    &:active {
      background-color: #e4ab42;
    }
  }
`;
