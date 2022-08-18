import React from 'react';
import {Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import './style.scss';
import { Portfolio } from './Portfolio';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
