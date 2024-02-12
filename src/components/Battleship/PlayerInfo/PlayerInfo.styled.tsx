import styled from "styled-components";
import { COLORS } from "../../../values/color";

export const PlayerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  height: 3.3rem;
  color: ${COLORS.teal500};
  margin: 0.5rem;
`;
