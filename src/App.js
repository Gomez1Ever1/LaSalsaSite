
import React from 'react';
import NavBar from './components/Navs/NavBar';
import './App.css';
import Footer from './components/Navs/Footer';
import { Container } from 'react-bootstrap';
import taco from './images/taco.jpeg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${taco})`, backgroundSize: 'cover', height: 'auto', width: 'auto' }}>

      <Container>
        <NavBar />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
