import React from 'react';
import {Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import './style.scss';
import { Portfolio } from './Portfolio';
import { Header } from './components/Header';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';


function App() {
    return (
        <BrowserRouter>
            <div className='portfolio'>
                <Header updateViewingPage={null} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    
                </Routes>
            </div>
        </BrowserRouter>
    );
}
// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Portfolio />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

export default App;
