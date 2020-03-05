import React from "react";
import { render } from "@testing-library/react";
import SongHeader from "../SongHeader";

test("renders the `SongHeader` with text", () => {
  const { getByText } = render(<SongHeader text="A header" />);

  expect(getByText("A header")).toBeInTheDocument();
});
