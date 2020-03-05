import React from "react";

const LinkButton = ({ href, text, target }) => (
  <a href={href} target={target}>
    {text}
  </a>
);

export default LinkButton;
