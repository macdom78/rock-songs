import React from "react";
import styled from "@emotion/styled";

import { formatTime, formatDate, formatCurrency } from "../helpers/formatters";
import Image from "./Image";
import SongDetail from "./SongDetail";
import SongHeader from "./SongHeader";
import LinkButton from "./LinkButton";

const Card = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageContainer = styled.div`
  margin-right: 8px;
`;

const ExtraDetail = styled(SongDetail)`
  display: none;
  ${({ extraDetails }) => extraDetails && { display: "block" }}
`;

const DetailsContainer = styled.div``;

const SongCard = ({ song, link, extraDetails }) => {
  const {
    artworkUrl100,
    trackName,
    artistName,
    trackPrice,
    trackTimeMillis,
    releaseDate,
    currency
  } = song;

  return (
    <Card>
      <ImageContainer>
        <Image src={artworkUrl100} alt={trackName} />
      </ImageContainer>
      <DetailsContainer>
        <SongHeader text={trackName} />
        <SongDetail text={artistName} />
        <SongDetail text={formatCurrency({ amount: trackPrice, currency })} />
        <ExtraDetail
          extraDetails={extraDetails}
          text={formatTime(trackTimeMillis)}
        />
        <ExtraDetail
          extraDetails={extraDetails}
          text={formatDate(releaseDate)}
        />
        <LinkButton {...link} />
      </DetailsContainer>
    </Card>
  );
};

export default SongCard;
