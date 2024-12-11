import React, { useState, useEffect } from 'react';
import Loader from './components/Loader'; // Import the Loader component
import NavBar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhyMe from './components/WhyMe/WhyMe';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';
import Faqs from './components/Faqs/Faqs';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate content loading (you can replace this with actual async data loading logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loader after 3 seconds (replace with actual logic)
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className='bg-gray-100'>
      {isLoading ? (
        <Loader /> // Show the loader when the page is loading
      ) : (
        <>
          <NavBar />
          <Hero />
          <About />
          <Skills />
          <WhyMe />
          <Testimonials />
          <Faqs />
          <Services />
          <MyWork />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
