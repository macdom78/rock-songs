import React from "react";
import { render } from "@testing-library/react";
import SongDetail from "../SongDetail";

test("renders the `SongDetail` with text", () => {
  const { getByText } = render(<SongDetail text="A detail" />);

  expect(getByText("A detail")).toBeInTheDocument();
});
