import React from "react";
import styled from "@emotion/styled";

const Header = styled.h4`
  margin: 0;
`;

const SongHeader = ({ text }) => <Header>{text}</Header>;

export default SongHeader;
