import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import WholePage from "./WholePage";
import SongListPage from "./LocationSongListPage";
import MyProfile from "./MyProfile";
import DefaultPage from "./DefaultPage";
import LocationSongListPage from "./LocationSongListPage";

const App = () => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    return (
        <Router>
            <Routes>
                <Route path="/" element={username && password ? <WholePage /> : <DefaultPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<WholePage />} />
                <Route path="/songlist" element={<LocationSongListPage />} />
                <Route path="/myprofile" element={<MyProfile />} />
                <Route path="/defaultpage" element={<DefaultPage />} />
            </Routes>
        </Router>
    );
};

export default App;