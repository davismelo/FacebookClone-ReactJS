import React from "react";
import styled from "styled-components";

const ButtonBase = styled.button`
  padding: 15px 10px;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  border: none;
  color: #fff;
  border-radius: 6px;
`;

export default function Button({ children }) {
  return <ButtonBase>{children}</ButtonBase>;
}
