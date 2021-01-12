import React, { useState, useEffect } from "react";

import "./App.css";

import Container from "./Container";

import Menu from "./Menu";

import Main from "./Main";
import TrackSearch from "./TrackSearch";
import SingerPage from "./SingerPage";

const App = () => {
  const api_key = "dde8e3bb2ce4b79a593a14a45c404ef8";
  const top_chart_list = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${api_key}&format=json`;

  const [topTracks, setTopTracks] = useState([]);
  const [artist, setArtist] = useState(null);

  const [path, setPath] = useState("/");

  const getInfo = (name) => {
    const info_about_artist = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${api_key}&format=json`;

    if (!name) return;

    fetch(info_about_artist)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArtist(data);

        setPath("/singer");
      });
  };

  useEffect(() => {
    fetch(top_chart_list)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTopTracks(data.tracks.track);
      });
  }, []);

  useEffect(() => {
    setPath("/");
  }, []);

  return (
    <Container>
      <Menu setPath={setPath} />
      {path == "/" && <Main topTracks={topTracks} getInfo={getInfo} />}
      {path == "/search" && <TrackSearch />}
      {path == "/singer" && <SingerPage artist={artist && artist} />}
    </Container>
  );
};

export default App;
