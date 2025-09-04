import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProjectPage from './pages/ProjectPage';
import SplashPage from './pages/SplashPage';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userID" element={<ProfilePage />} />
            <Route path="/project/:projectID" element={<ProjectPage />} />
        </Routes>
    </Router>
);

export default App;