// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Layout from './components/Layout';
import Resume from './components/Resume'
import Portfolios from './components/Portfolios';
import './App.css'; // Global styles including layout

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/portfolios" element={<Portfolios/>} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
