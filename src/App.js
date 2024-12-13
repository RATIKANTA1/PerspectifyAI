import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/ContactForm';
import AboutUs from './Components/AboutUs';
import Booking from './Components/Booking';
import Carousel from './Components/Carousel';
import BlogSection from './Components/BlogSection';
import ChatBot from './Components/ChatBot';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutUs />
      <Services />
      <Booking /> 
      <Carousel />
      <BlogSection/>
      <Contact />
      <ChatBot/>
      <Footer/>

      
    </div>
  );
}

export default App;
