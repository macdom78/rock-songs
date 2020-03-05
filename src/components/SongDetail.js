import React from "react";
import styled from "@emotion/styled";

const Detail = styled.p`
  margin: 0;
`;

const SongDetail = ({ text, className }) => (
  <Detail className={className}>{text}</Detail>
);

export default SongDetail;
