import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer';
import Home from './Home/Home';
import AcessoRapido from './AcessoRapido/AcessoRapido';
import Drawler from './Drawler/Drawler';
function App() {
  return (
    <div>
     
      <NavBar/>
      <Home />
      <AcessoRapido/>
      <Footer />
     
    </div>
  );
}

export default App;
