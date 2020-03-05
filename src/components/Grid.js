import React from "react";
import styled from "@emotion/styled";
import { BREAKPOINTS } from "../helpers/constants";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;

  @media (min-width: ${BREAKPOINTS.MED}) {
    grid-template-columns: 50% 50%;
  }

  @media (min-width: ${BREAKPOINTS.LRG}) {
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
  }

  @media (min-width: ${BREAKPOINTS.XL}) {
    grid-template-columns: 25% 25% 25% 25%;
  }
`;

const Grid = ({ children }) => <StyledGrid>{children}</StyledGrid>;

export default Grid;
