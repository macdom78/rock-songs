import React from "react";
import { render } from "@testing-library/react";
import Grid from "../Grid";

test("renders all children in the grid", () => {
  const { container, getByText } = render(
    <Grid>
      <div>Song 1</div>
      <div>Song 2</div>
      <div>Song 3</div>
    </Grid>
  );

  expect(container.children[0].children).toHaveLength(3);
  expect(getByText("Song 1")).toBeInTheDocument();
});
