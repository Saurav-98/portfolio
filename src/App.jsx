import React from 'react';
import {
  About,
  Contacts,
  Experience,
  Footer,
  Header,
  Nav,
  Portfolio,
  Skills,
  Testimonials,
} from './components';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
