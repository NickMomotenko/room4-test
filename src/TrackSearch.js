import React, { useState } from "react";

import styled from "styled-components";

const TrackSearchWrapp = styled.div``;

const TrackSearchRow = styled.div`
  display: flex;
`;

const TrackSearchData = styled.div``;

const TrackSearchText = styled.div`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const TrackSearch = () => {
  const [value, setValue] = useState("");

  const [trackToSearch, setTrackToSearch] = useState();

  const api_key = "dde8e3bb2ce4b79a593a14a45c404ef8";

  const searchTrack = (text) => {
    const url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${text}&api_key=${api_key}&format=json`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTrackToSearch(data);

        console.log(data);
      });
  };

  return (
    <TrackSearchWrapp>
      <TrackSearchRow>
        <input
          value={value}
          name="search"
          onChange={(event) => setValue(event.target.value)}
          placeholder="Название трека"
        />
        <button onClick={(event) => searchTrack(value)}>найти трек</button>
      </TrackSearchRow>
      <TrackSearchData>
        <span>{`Все что мне удалось найти по твоему названию:${value}`}</span>
        {trackToSearch &&
          trackToSearch?.results?.trackmatches?.track.map((info, index) => (
            <TrackSearchRow key={index}>
              <TrackSearchText>{info.name}</TrackSearchText>
              <TrackSearchText>{info.artist}</TrackSearchText>
            </TrackSearchRow>
          ))}
      </TrackSearchData>
    </TrackSearchWrapp>
  );
};

export default TrackSearch;
