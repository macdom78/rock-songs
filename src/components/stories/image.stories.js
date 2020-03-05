import React from "react";
import Image from "../Image";

export default {
  title: "Components/Image",
  component: Image
};

const defaultStory = () => {
  const image = {
    src:
      "https://is5-ssl.mzstatic.com/image/thumb/Music117/v4/d8/fe/b2/d8feb259-1e17-4f18-e120-4c38557f6714/source/100x100bb.jpg",
    alt: "An Image"
  };
  return <Image {...image} />;
};

export { defaultStory };
