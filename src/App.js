import React from 'react';
import {Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import './style.scss';
import { Header } from './components/Header';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import {Certificate} from "./components/pages/Certificate";
import {Experience} from "./components/pages/Experience";
const NonExistentPage = () => {
    return (
        <div className='certificate'>
            Nothing here :)
        </div>
    )
}
function App() {
    return (
        <BrowserRouter basedname="/">
            <div className='portfolio'>
                <Header updateViewingPage={null} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/certificates/generalAssembly" element={<Certificate type="generalAssembly" />}/>
                    <Route path="/certificates/awsJobRoles" element={<Certificate type="awsJobRoles"/>}/>
                    <Route path="/resume" element={<Certificate type="resume"/>}/>
                    <Route path="/experience" element={<Experience />} />   
                    <Route path="/qrCode" element={<Certificate type="qrCode" />} />   
                    <Route path="/*" element={<NonExistentPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;