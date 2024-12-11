import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/ContactForm';
import AboutUs from './Components/AboutUs';
import Booking from './Components/Booking';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutUs />
      <Services />
      <Booking /> 
      <Contact />
    </div>
  );
}

export default App;
