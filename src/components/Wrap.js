import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Wrap = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Wrap;
