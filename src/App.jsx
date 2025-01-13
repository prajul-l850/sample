import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Start from './pages/Start';
import Story from './pages/Story';
import Dating from './pages/Dating';
import Gf from './pages/Gf';
import Pics from './pages/Pics';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/story" element={<Story />} />
        <Route path="/Dating" element={<Dating />} />
        <Route path="/Gf" element={<Gf />} />
        <Route path="/Pics" element={<Pics />} />
      </Routes>
    </Router>
  );
};

export default App;
