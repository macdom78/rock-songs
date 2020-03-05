import React from "react";
import LinkButton from "../LinkButton";

export default {
  title: "Components/LinkButton",
  component: LinkButton
};

const defaultStory = () => {
  const link = {
    href: "https://www.google.com",
    text: "A Link",
    target: ""
  };
  return <LinkButton {...link} />;
};

const openInNewtab = () => {
  const link = {
    href: "https://www.google.com",
    text: "A Link",
    target: "_blank"
  };
  return <LinkButton {...link} />;
};

export { defaultStory, openInNewtab };
