import React from "react";
import { render } from "@testing-library/react";
import Image from "../Image";

test("renders the image", () => {
  const { getByAltText } = render(<Image src="test_src" alt="alt_text" />);

  const image = getByAltText("alt_text");

  expect(image).toBeInTheDocument();
  expect(image.closest("img")).toHaveAttribute("src", "test_src");
});
