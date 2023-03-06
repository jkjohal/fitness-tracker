import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Navigation from './components/Navigation';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Footer from './pages/Footer';

function App() {

  return (
    <Router>
      <div className='App'>
        <Home />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );

}

export default App;