import React from "react";
import styled from "@emotion/styled";
import Wrap from "../Wrap";

export default {
  title: "Components/Wrap",
  component: Wrap
};

const Box = styled.div`
  width: 100%;
  height: 200px;
  border: 2px solid;
`;

const defaultStory = () => {
  return (
    <Wrap>
      <Box />
    </Wrap>
  );
};

export { defaultStory };
