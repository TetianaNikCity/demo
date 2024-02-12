import React, { RefObject } from "react";
import styled from "styled-components";
import { COLORS } from "../../../values/color";

const InputWraper = styled.input`
  width: 20rem;
  height: 3rem;
  background: ${COLORS.teal50};
  color: ${COLORS.teal400};
  border: 0.1rem solid ${COLORS.teal300} !important;
  border-radius: 0.6rem;
  margin: 0.5rem;

  &:hover {
    background: ${COLORS.teal100};
  }
  &:focus {
    background: ${COLORS.teal400};
    color: ${COLORS.teal50};
  }
  &:focus {
    outline: none;
    outline-offset: 0px;
  }
`;

type InputProps = {
  inputRef?: RefObject<HTMLInputElement>;
  defaultValue?: string;
};
const Input: React.FC<InputProps> = ({ inputRef, defaultValue }) => {
  return (
    <>
      <InputWraper
        data-testid="input-element"
        ref={inputRef}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default Input;
