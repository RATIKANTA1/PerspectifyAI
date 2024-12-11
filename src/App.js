import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import ContactForm from './Components/ContactForm';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutUs/>
      <Services />
      <ContactForm />
      
    </div>
  );
}

export default App;
