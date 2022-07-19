import React from 'react';
import {Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import './style.scss';
import { LandingPage } from './LandingPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
