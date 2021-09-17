import React from "react";
import styled from "styled-components";

const InputBase = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #d1d0d0;
  border-radius: 5.5px;
  font-size: 0.97rem;
  &::placeholder {
    color: #a0a0a0;
  }
`;

export default function Input({ type, placeholder }) {
  return <InputBase type={type} placeholder={placeholder} />;
}
