
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';
import taco from './images/taco.jpeg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${taco})`, backgroundSize: 'cover', height: 'auto', width: 'auto' }}>
      <NavBar />
      <Container>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
