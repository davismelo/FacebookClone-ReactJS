import React from "react";
import styled from "styled-components";

const InputBase = styled.input`
  padding: 7px;
  outline: none;
  background: none;
  margin: 5px;
  border: 1px solid gray;
  border-radius: 5.5px;
  font-size: 1rem;
`;

export default function Input({ type, placeholder }) {
  return <InputBase type={type} placeholder={placeholder} />;
}
