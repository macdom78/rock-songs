import React from "react";
import { render } from "@testing-library/react";
import LinkButton from "../LinkButton";

test("renders the link-button", () => {
  const link = {
    href: "a/href",
    text: "Link Text",
    target: "_blank"
  };
  const { getByText } = render(<LinkButton {...link} />);

  const linkButton = getByText("Link Text");

  expect(linkButton).toBeInTheDocument();
  expect(linkButton.closest("a")).toHaveAttribute("href", "a/href");
  expect(linkButton.closest("a")).toHaveAttribute("target", "_blank");
});
