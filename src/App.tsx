import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer';
import Home from './Home/Home';
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
