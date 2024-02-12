import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../values/color";

const ButtonWraper = styled.button`
  width: 20rem;
  height: 3rem;
  background: ${COLORS.teal50};
  color: ${COLORS.teal400};
  border: 0.1rem solid ${COLORS.teal300};
  border-radius: 0.6rem;
  margin: 0.5rem;

  &:hover {
    background: ${COLORS.teal400};
    color: ${COLORS.teal50};
  }
`;

type ButtonProps = {
  onClick?: () => void;
  title: string;
};
const Button: React.FC<ButtonProps> = ({ onClick, title }) => {
  return (
    <>
      <ButtonWraper onClick={onClick}>{title}</ButtonWraper>
    </>
  );
};

export default Button;
