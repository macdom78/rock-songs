import React from "react";
import { render } from "@testing-library/react";
import Wrap from "../Wrap";

test("renders all children in the wrap", () => {
  const { container, getByText } = render(
    <Wrap>
      <div>Song 1</div>
      <div>Song 2</div>
      <div>Song 3</div>
    </Wrap>
  );

  expect(container.children[0].children).toHaveLength(3);
  expect(getByText("Song 1")).toBeInTheDocument();
});
