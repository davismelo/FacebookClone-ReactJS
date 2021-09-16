import React from "react";
import styled from "styled-components";

const ButtonBase = styled.button`
  padding: 12px 10px;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  margin: auto;
  border: none;
  color: #fff;
  border-radius: 6px;
`;

export default function Button({ children, onClick }) {
  return <ButtonBase onClick={onClick}>{children}</ButtonBase>;
}
