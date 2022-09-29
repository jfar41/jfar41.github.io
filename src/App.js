import React from 'react';
import {Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import './style.scss';
import { Portfolio } from './Portfolio';
import { Header } from './components/Header';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import {Certificate} from "./components/pages/Certificate";
import {Experience} from "./components/pages/Experience";

function App() {
    return (
        <BrowserRouter>
            <div className='portfolio'>
                <Header updateViewingPage={null} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/certificates/GeneralAssembly" element={<Certificate type="GeneralAssembly" />}/>
                    <Route path="/certificates/awsJobRoles" element={<Certificate type="awsJobRoles"/>}/>
                    <Route path="/experience" element={<Experience />} />   
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
