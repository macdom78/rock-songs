import React from "react";
import styled from "@emotion/styled";
import Grid from "../Grid";

export default {
  title: "Components/Grid",
  component: Grid
};

const Box = styled.div`
  height: 128px;
  border: 2px solid;
`;

const defaultStory = () => {
  return (
    <Grid>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </Grid>
  );
};

export { defaultStory };
