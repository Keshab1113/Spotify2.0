import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Home from './pages/Home';
import Playlists from './pages/Playlists';
import Albums from './pages/Albums';
import Genres from './pages/Genres';
import songs from "./assets/songs"
import axios from 'axios';

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [musics, setMusics] = useState(null);
  useEffect(() => {
    const getMusic = async () => {
      const url = `https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5&q=%3CREQUIRED%3E`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'd01f0af71emsh43895e008fde272p173567jsn5ff7486fecf0',
          'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMusics(result);
      } catch (error) {
        console.error(error);
      }
    };

    getMusic();
  }, []);
  
  return (
    <Router>
      <div className="flex overflow-hidden">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home songs={songs} setCurrentSong={setCurrentSong} />} />
            <Route path="/playlists" element={<Playlists songs={songs} setCurrentSong={setCurrentSong} />} />
            <Route path="/albums" element={<Albums musics={musics} />} />
            <Route path="/genres" element={<Genres musics={musics} />} />
          </Routes>
          <Player currentSong={currentSong} />
        </div>
      </div>
    </Router>
  );
};

export default App;
