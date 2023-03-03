import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Navigation from './components/Navigation';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Home/>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={Signup} />
      </Routes>
    </Router>
  );
}

export default App;
